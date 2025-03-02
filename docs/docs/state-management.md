---
sidebar_position: 5
---

# State Management

This section explains the state management approach used in the Crypto Price Tracker application.

## React Query for Server State

The application uses [React Query](https://tanstack.com/query) (TanStack Query) as its primary state management solution. React Query was chosen because it:

1. **Specializes in async data management**: Perfect for API-based applications
2. **Provides built-in caching**: Reduces unnecessary API calls
3. **Handles loading and error states**: Simplifies component logic
4. **Offers automatic and manual refetching**: Keeps data fresh
5. **Implements optimistic updates**: Creates responsive UI experiences

## Custom Hook Architecture

Server state is abstracted through a custom hook (`useCrypto.js`) that provides a clean interface to components:

```javascript
export function useCrypto(cryptoIds = DEFAULT_CRYPTOS) {
  const queryClient = useQueryClient();
  
  // Main query for cryptocurrency data
  const query = useQuery({
    queryKey: ['cryptoPrices', cryptoIds],
    queryFn: () => fetchCryptoPrices(cryptoIds),
    refetchInterval: 60000, // Auto-refresh every minute
    staleTime: 30000,       // Consider data stale after 30 seconds
  });
  
  // Mutation for manual refresh
  const refreshMutation = useMutation({
    mutationFn: () => fetchCryptoPrices(cryptoIds),
    onSuccess: (data) => {
      queryClient.setQueryData(['cryptoPrices', cryptoIds], data);
    },
  });
  
  // Function to manually refresh data
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
```

## Why React Query Instead of Alternatives?

### Compared to Context API

- **Context API**: Designed for app-wide state that changes infrequently
- **React Query**: Optimized for server state with automatic caching and refetching

### Compared to Zustand

- **Zustand**: Excellent for client-only state with minimal boilerplate
- **React Query**: Better for server state with built-in data synchronization features

### Compared to Redux

- **Redux**: Good for complex client state with many interdependencies
- **React Query**: Simpler for async data with less boilerplate

## Local UI State

For simple UI state (like search input values), we use React's built-in `useState` hook:

```javascript
const [searchQuery, setSearchQuery] = useState('');
```

This approach follows the principle of using the right tool for each job:

- **React Query**: Server and cached data
- **useState**: Simple, component-level UI state
- **React Context**: (Used minimally) Only for deeply nested prop requirements