---
sidebar_position: 4
---

# API Integration

This section explains how the Crypto Price Tracker integrates with the CoinGecko API to fetch cryptocurrency data.

## API Overview

The application uses the [CoinGecko API](https://www.coingecko.com/en/api) to retrieve cryptocurrency price data. CoinGecko offers a comprehensive API that provides various data points about cryptocurrencies, including:

- Current prices
- Historical data
- Market capitalization
- Trading volume
- Price changes over different time periods

## Integration Approach

The API integration is structured around two main functions in `lib/cryptoApi.js`:

1. **fetchCryptoPrices**: Retrieves price data for specified cryptocurrencies
2. **searchCryptocurrencies**: Searches for cryptocurrencies by name or symbol

### Data Fetching Process

```javascript
export async function fetchCryptoPrices(cryptoIds = DEFAULT_CRYPTOS) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/coins/markets?vs_currency=usd&ids=${cryptoIds.join(',')}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw error;
  }
}
```

## Error Handling

The integration includes comprehensive error handling:

1. **Network errors**: Caught and properly reported
2. **API response errors**: Checked with response.ok
3. **Data parsing issues**: Handled with try/catch blocks

## Caching Strategy

To optimize performance and reduce API calls:

1. **React Query** is used to cache responses
2. Data is considered fresh for 30 seconds (staleTime)
3. Automatic background refreshes occur every 60 seconds
4. Manual refresh is also available to users

