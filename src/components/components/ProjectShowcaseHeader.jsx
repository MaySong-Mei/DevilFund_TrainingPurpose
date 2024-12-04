import { Box, Flex, Heading, Button } from "@chakra-ui/react";

function ProjectShowcaseHeader() {
  return (
    <Flex 
      justify="space-between" 
      align="center" 
      mb={5}
    >
      <Box>
        <Heading
          as="h2"
          size="3xl"
          color="gray.800"
          fontWeight="normal"
          lineHeight="1.2"
          mt={10}
          mb={5}
        >
          Our Sponsored Projects{" "}
          <br />
          Can Make a Difference
        </Heading>
      </Box>
      
      <Button
        alignSelf="flex-end"
        size="sm"
        position="relative"
        overflow="hidden"
        bg="white"
        color="gray.900"
        px={6}
        mb={10}
        height="45px"
        fontSize="sm"
        fontWeight="light"
        border="1px solid"
        borderColor="gray.400"
        borderRadius="0"
        transition="all 0.2s ease"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "gray.900",
          transform: "translateX(-100%)",
          transition: "transform 0.3s ease",
          zIndex: -1,
        }}
        _hover={{
          "& > *": {
            color: "white",
            transition: "color 0.2s ease",
          },
          _after: {
            transform: "translateX(0)",
          },
        }}
        sx={{
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
        }}
      >
        <span>VISIT STARTUP FACTORY</span>
      </Button>
    </Flex>
  );
}

export default ProjectShowcaseHeader; 