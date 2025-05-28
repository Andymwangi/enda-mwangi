export const getCurrencyByCountry = (countryCode: string): { currency: string; symbol: string } => {
  const currencyMap: { [key: string]: { currency: string; symbol: string } } = {
    'KE': { currency: 'KES', symbol: 'KSh ' },
    'US': { currency: 'USD', symbol: '$' },
    'GB': { currency: 'GBP', symbol: '£' },
    'EU': { currency: 'EUR', symbol: '€' },
    'NG': { currency: 'NGN', symbol: '₦' },
    'ZA': { currency: 'ZAR', symbol: 'R' },
    'UG': { currency: 'UGX', symbol: 'USh ' },
    'TZ': { currency: 'TZS', symbol: 'TSh ' }
  };

  return currencyMap[countryCode] || { currency: 'USD', symbol: '$' };
};

export const getExchangeRate = async (fromCurrency: string, toCurrency: string): Promise<number> => {
  try {
    // Using a free exchange rate API - you can replace with your preferred service
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    return data.rates[toCurrency] || 1;
  } catch (error) {
    console.error('Exchange rate fetch failed:', error);
    // Fallback rates (you should update these regularly)
    const fallbackRates: { [key: string]: number } = {
      'USD_KES': 129,
      'USD_GBP': 0.79,
      'USD_EUR': 0.85,
      'USD_NGN': 460,
      'USD_ZAR': 18.5,
      'USD_UGX': 3700,
      'USD_TZS': 2300
    };
    return fallbackRates[`${fromCurrency}_${toCurrency}`] || 1;
  }
};