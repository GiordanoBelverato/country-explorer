import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCountryByName } from '../services/api';

type CountryDetailProps = {
  name: string;
  flag: string;
  region: string;
  population: number;
  capital: string;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  borders: string[];
  timezones: string[];
  callingCode: string;
};

const CountryDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<CountryDetailProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        if (!name) return;
        const data = await getCountryByName(name);
        const countryData = data[0];
        setCountry({
          name: countryData.name.common,
          flag: countryData.flags.svg,
          region: countryData.region,
          population: countryData.population,
          capital: countryData.capital ? countryData.capital[0] : 'N/A',
          languages: countryData.languages || {},
          currencies: countryData.currencies || {},
          borders: countryData.borders || [],
          timezones: countryData.timezones,
          callingCode: `${countryData.idd.root || ''}${
            countryData.idd.suffixes ? countryData.idd.suffixes[0] : ''
          }`,
        });
      } catch (error) {
        console.error('Error fetching country details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!country) {
    return <Text>Country not found.</Text>;
  }

  return (
    <VStack gap={4} align="stretch">
      <Box textAlign="center">
        <Image src={country.flag} alt={`${country.name} flag`} boxSize="300px" />
        <Text fontSize="2xl" fontWeight="bold">
          {country.name}
        </Text>
      </Box>
      <Box>
        <Text><strong>Region:</strong> {country.region}</Text>
        <Text><strong>Population:</strong> {country.population.toLocaleString()}</Text>
        <Text><strong>Capital:</strong> {country.capital}</Text>
        <Text><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</Text>
        <Text>
          <strong>Currencies:</strong> {Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')}
        </Text>
        <Text><strong>Borders:</strong> {country.borders.join(', ') || 'None'}</Text>
        <Text><strong>Timezones:</strong> {country.timezones.join(', ')}</Text>
        <Text><strong>Calling Code:</strong> {country.callingCode}</Text>
      </Box>
    </VStack>
  );
};

export default CountryDetails;
