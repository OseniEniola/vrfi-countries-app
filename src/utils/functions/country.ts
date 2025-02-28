// Function to get the currency name dynamically
export const getCurrencyName = (country: any): string => {
    const currencyCode = Object.keys(country.currencies)[0];
    
    const currencyName = country.currencies[currencyCode]?.name;
    
    return currencyName || 'Currency not available';
  };

  export const getCountryLang = (country: any): string => {
    const langCode = Object.keys(country.languages)[0];
    
    const lang = country.languages[langCode];
    
    return lang;
  };