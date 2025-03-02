import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCryptoPrices, DEFAULT_CRYPTOS } from '../lib/cryptoApi';

/**
 * hook for managing cryptocurrency data using React Query
 * @param {string[]} cryptoIds - Optional list of crypto IDs to track (defaults to preset list)
 * @returns {Object} - Query results and refresh function
 */
export function useCrypto(cryptoIds = DEFAULT_CRYPTOS) {
  const queryClient = useQueryClient();
  
  const query = useQuery({
    queryKey: ['cryptoPrices', cryptoIds],
    queryFn: () => fetchCryptoPrices(cryptoIds),
    refetchInterval: 60000,
    staleTime: 30000,
  });
  
  const refreshMutation = useMutation({
    mutationFn: () => fetchCryptoPrices(cryptoIds),
    onSuccess: (data) => {
      queryClient.setQueryData(['cryptoPrices', cryptoIds], data);
    },
  });
  
  const refreshData = () => {
    refreshMutation.mutate();
  };
  
  return {
    data: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isRefreshing: refreshMutation.isPending,
    refreshData,
    lastUpdated: query.dataUpdatedAt,
  };
}