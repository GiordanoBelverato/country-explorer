import { Box, Image, Text } from '@chakra-ui/react';

type CountryCardProps = {
  name: string;
  flag: string;
  region: string;
  population: number;
};

const CountryCard = ({ name, flag, region, population }: CountryCardProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Image src={flag} alt={`${name} flag`} />
      <Text mt={2} fontWeight="bold">{name}</Text>
      <Text>Region: {region}</Text>
      <Text>Population: {population.toLocaleString()}</Text>
    </Box>
  );
};

export default CountryCard;