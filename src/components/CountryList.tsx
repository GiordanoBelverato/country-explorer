import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { getAllCountries } from '../services/api';

const CountryList = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!countries.length) {
    return <Text>No countries available.</Text>;
  }

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} gap={4}>
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          name={country.name.common}
          flag={country.flags.svg}
          region={country.region}
          population={country.population}
        />
      ))}
    </SimpleGrid>
  );
};

export default CountryList;