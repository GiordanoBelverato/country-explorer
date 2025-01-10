import { Box, Image, Text } from '@chakra-ui/react';

type CountryCardProps = {
  name: string;
  flag: string;
  region: string;
  population: number;
};

import { Link } from 'react-router-dom';

const CountryCard = ({ name, flag, region, population }: CountryCardProps) => {
  return (
    <Link to={`/country/${name}`}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
        <Image src={flag} alt={`${name} flag`} />
        <Text mt={2} fontWeight="bold">{name}</Text>
        <Text>Region: {region}</Text>
        <Text>Population: {population.toLocaleString()}</Text>
      </Box>
    </Link>
  );
};

export default CountryCard;