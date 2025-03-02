'use client'

import Image from "next/image";
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CryptoList from './components/CryptoList';
import { DEFAULT_CRYPTOS } from './lib/cryptoApi';

const queryClient = new QueryClient();


export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const [trackedCryptos, setTrackedCryptos] = useState(DEFAULT_CRYPTOS);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen p-4 md:p-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <Header />
          
          <div className="mb-6">
            <SearchBar 
              searchQuery={searchQuery} 
              onSearch={handleSearch} 
            />
          </div>
          
          <CryptoList 
            trackedCryptos={trackedCryptos}
            searchQuery={searchQuery}
          />
        </div>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
