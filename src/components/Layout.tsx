import { Box } from '@chakra-ui/react';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box maxW="1200px" mx="auto" p={4}>
        {children}
      </Box>
    </>
  );
};

export default Layout;