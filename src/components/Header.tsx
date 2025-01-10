import { Box, Flex, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="teal.500" color="white" p={4}>
      <Flex justifyContent="center">
        <Heading size="lg">Country Explorer</Heading>
      </Flex>
    </Box>
  );
};

export default Header;