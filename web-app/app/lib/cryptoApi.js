/**
 * Utility functions for interacting with the CoinGecko API
 */

// List of default cryptocurrencies to track
export const DEFAULT_CRYPTOS = [
    "bitcoin",
    "ethereum",
    "solana",
    "cardano",
    "ripple"
  ];
  
  const API_BASE_URL = "https://api.coingecko.com/api/v3";
  
  /**
   * Fetches current price data for specified cryptocurrencies
   * @param {string[]} cryptoIds - Array of cryptocurrency IDs to fetch
   * @returns {Promise<Object>} - Price data for requested cryptocurrencies
   */
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
  
  /**
   * Searches for cryptocurrencies by name
   * @param {string} query - Search query string
   * @returns {Promise<Object>} - Search results
   */
  export async function searchCryptocurrencies(query) {
    try {
      const response = await fetch(`${API_BASE_URL}/search?query=${query}`);
      
      if (!response.ok) {
        throw new Error(`Search API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.coins.slice(0, 10); // Return top 10 results
    } catch (error) {
      console.error("Error searching cryptocurrencies:", error);
      throw error;
    }
  }