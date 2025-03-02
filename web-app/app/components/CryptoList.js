import { useCrypto } from '../hooks/useCrypto';
import CryptoCard from './CryptoCard';
import LoadingSpinner from './LoadingSpinner';

export default function CryptoList({ trackedCryptos, searchQuery }) {
  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    refreshData, 
    isRefreshing,
    lastUpdated 
  } = useCrypto(trackedCryptos);
  
  const filteredData = searchQuery 
    ? data.filter(crypto => 
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data;
    
  const formattedTime = lastUpdated 
    ? new Date(lastUpdated).toLocaleTimeString() 
    : 'N/A';

  if (isLoading) return <LoadingSpinner />;
  
  if (isError) {
    return (
      <div className="text-center text-red-600 p-4 bg-red-100 rounded-lg">
        Error loading data: {error.message}
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          Last updated: {formattedTime}
        </p>
        <button 
          onClick={refreshData}
          disabled={isRefreshing}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg transition-colors flex items-center cursor-pointer"
        >
          {isRefreshing ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Refreshing...
            </>
          ) : 'Refresh Prices'}
        </button>
      </div>
      
      {filteredData.length === 0 ? (
        <div className="text-center p-8 bg-gray-100 rounded-lg">
          <p>No cryptocurrencies found matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map(crypto => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </div>
      )}
    </div>
  );
}