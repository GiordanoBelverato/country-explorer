export const getAllCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    return response.json();
  };

  export const getCountryByName = async (name: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      throw new Error('Failed to fetch country details');
    }
    return response.json();
  };