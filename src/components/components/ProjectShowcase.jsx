import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

function ProjectShowcase() {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      bg="white"
      position="relative"
      py={10}
    >
      <Flex
        maxWidth="98%"
        mx="auto"
        direction="column"
        align="left"
        px={4}
      >
        {/* 标题部分 */}
        <Flex 
        justify="space-between" 
        align="center" 
        mb={5}
        // border="1px solid red"
        >
          <Box>
            <Heading
              as="h2"
              size="3xl"
              color="gray.800"
              fontWeight="normal"
              lineHeight="1.2"
              mt={10}
              mb={10}
            //   border="1px solid blue"
            >
              OUR SPONSORED PROJECTS{" "}
              <br />
              ARE MAKING CHANGES TO THE WORLD
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

        {/* 内容部分 */}
        <Flex gap={1} width="100%" flexWrap="wrap" justify="space-between">
          <Box
            flex="1"
            minW={{ base: "100%", md: "49%" }}
            maxW={{ base: "100%", md: "49%" }}
            bg="gray.50"
            p={8}
            height="600px"
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "xl",
              transform: "translateY(-2px)"
            }}
          >
            <Text fontSize="xl" color="gray.700" mb={4}>
              Start your journey with Devil Fund's innovative projects that challenge the status quo and create meaningful impact.
            </Text>
            <Button
              size="lg"
              bg="gray.900"
              color="white"
              _hover={{ bg: "gray.700" }}
              mt={4}
            >
              Explore Projects
            </Button>
          </Box>

          <Box
            flex="1"
            minW={{ base: "100%", md: "49%" }}
            maxW={{ base: "100%", md: "49%" }}
            bg="gray.50"
            p={8}
            height="600px"
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "xl",
              transform: "translateY(-2px)"
            }}
          >
            <Text fontSize="xl" color="gray.700" mb={4}>
              Join our community of innovators and disruptors who are reshaping industries through groundbreaking solutions.
            </Text>
            <Button
              size="lg"
              bg="gray.900"
              color="white"
              _hover={{ bg: "gray.700" }}
              mt={4}
            >
              Join Community
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ProjectShowcase; 