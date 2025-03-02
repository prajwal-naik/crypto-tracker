export default function CryptoCard({ crypto }) {
    const priceChangeClass = crypto.price_change_percentage_24h >= 0
      ? 'text-green-600'
      : 'text-red-600';
      
    return (
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-2">
          <img 
            src={crypto.image} 
            alt={crypto.name} 
            className="w-8 h-8 mr-2"
          />
          <h2 className="text-xl font-semibold">{crypto.name}</h2>
          <span className="ml-2 text-gray-500">{crypto.symbol.toUpperCase()}</span>
        </div>
        
        <div className="mt-4">
          <p className="text-2xl font-bold">${crypto.current_price.toLocaleString()}</p>
          <p className={`${priceChangeClass} font-medium`}>
            {crypto.price_change_percentage_24h >= 0 ? '+' : ''}
            {crypto.price_change_percentage_24h.toFixed(2)}% (24h)
          </p>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>
            <p className="font-medium">Market Cap</p>
            <p>${crypto.market_cap.toLocaleString()}</p>
          </div>
          <div>
            <p className="font-medium">Volume (24h)</p>
            <p>${crypto.total_volume.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
}