import { Box, Flex, Text, Button, Link, Heading } from "@chakra-ui/react";

function ShowcaseContent({ project }) {
  return (
    <Flex direction="column" height="100%" justify="space-between">
      <Flex gap={8} mb={8}>
        <Box 
          width="60px" 
          height="60px" 
          bg="gray.100" 
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {project.logo}
        </Box>

        <Flex direction="column" justify="center">
          <Heading 
            as="h3" 
            size="lg"
            color="gray.900"
            fontWeight="semibold"
            mb={1}
          >
            {project.title}
          </Heading>
          <Text fontSize="md" color="gray.600">
            {project.subtitle}
          </Text>
        </Flex>
      </Flex>

      <Text fontSize="md" color="gray.600" my={8}>
        {project.description}
      </Text>

      <Flex justify="space-between" align="flex-end">
        <Flex direction="column" gap={2}>
          {project.links.map((link, index) => (
            <Link
              key={index}
              color="gray.700"
              fontSize="md"
              _hover={{ color: "gray.900" }}
              href={link.url}
            >
              → {link.text}
            </Link>
          ))}
        </Flex>

        <Button
          bg="black"
          color="white"
          size="md"
          px={6}
          _hover={{ bg: "gray.800" }}
        >
          Open Demo
        </Button>
      </Flex>
    </Flex>
  );
}

export default ShowcaseContent; 