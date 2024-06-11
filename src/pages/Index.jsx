import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaNewspaper, FaRegCommentDots, FaRegNewspaper } from "react-icons/fa";

const Header = () => (
  <Box as="header" bg="brand.800" color="white" py={4}>
    <Container maxW="container.lg">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          <Link href="/" _hover={{ textDecoration: "none" }} color="white">
            Financial Times
          </Link>
        </Heading>
        <HStack spacing={8}>
          <Link href="#featured" _hover={{ color: "gray.300" }}>Featured</Link>
          <Link href="#latest" _hover={{ color: "gray.300" }}>Latest News</Link>
          <Link href="#opinion" _hover={{ color: "gray.300" }}>Opinion</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
    <Container maxW="container.lg">
      <Flex justify="space-between" align="center">
        <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
        <HStack spacing={8}>
          <Link href="#contact" _hover={{ color: "gray.300" }}>Contact</Link>
          <Link href="#privacy" _hover={{ color: "gray.300" }}>Privacy Policy</Link>
          <Link href="#terms" _hover={{ color: "gray.300" }}>Terms of Service</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const Section = ({ id, title, icon, children }) => (
  <Box as="section" id={id} py={8}>
    <Container maxW="container.lg">
      <Heading as="h2" size="xl" mb={4}>
        <HStack>
          {icon}
          <Text>{title}</Text>
        </HStack>
      </Heading>
      {children}
    </Container>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <Box as="main" py={8}>
        <Section id="featured" title="Featured Articles" icon={<FaNewspaper />}>
          <VStack spacing={4} align="start">
            <Text>Featured Article 1</Text>
            <Divider />
            <Text>Featured Article 2</Text>
            <Divider />
            <Text>Featured Article 3</Text>
          </VStack>
        </Section>
        <Section id="latest" title="Latest News" icon={<FaRegNewspaper />}>
          <VStack spacing={4} align="start">
            <Text>Latest News 1</Text>
            <Divider />
            <Text>Latest News 2</Text>
            <Divider />
            <Text>Latest News 3</Text>
          </VStack>
        </Section>
        <Section id="opinion" title="Opinion Pieces" icon={<FaRegCommentDots />}>
          <VStack spacing={4} align="start">
            <Text>Opinion Piece 1</Text>
            <Divider />
            <Text>Opinion Piece 2</Text>
            <Divider />
            <Text>Opinion Piece 3</Text>
          </VStack>
        </Section>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;