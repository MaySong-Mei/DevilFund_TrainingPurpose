import { Box, Heading, Text, Flex, Image, Button } from "@chakra-ui/react";

function DevilFundInfo() {
  return (
    <Box
      bg="#0a1015, 0.2"
      borderRadius="3xl"
      justify="space-between"
      align="center"
      maxWidth="1180px"
      mx="auto"
      mt={3}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
      opacity={0.95}
      backdropFilter="blur(15px)"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      border="1px solid gray"
      p={8}
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.8)",
      }}
    >
      <Heading size="4xl">
        Devil Fund
      </Heading>
      <Text size="lg" lineHeight="0.5" mb={5}>
        ©portalle,Inc
      </Text>

      <Flex>
        <Box marginEnd="auto" position="relative">
          <Image
            src="/images/vortex.svg"
            alt="Vortex"
            position="absolute"
            opacity={0.8}
            zIndex={0}
            top={-5}
            height={320}
          />
          <Box px={100} position="relative" zIndex={1}>
            <Flex mt={12} gap={2} alignItems="baseline" position="relative">
              <Text
                fontSize="4xl"
                lineHeight="1.5"
                textAlign="left"
                color="white"
                fontWeight="bold"
              >
                What is
              </Text>
              <Text
                fontSize="4xl"
                lineHeight="1.5"
                textAlign="left"
                color="#950000"
                fontWeight="bold"
              >
                Devil Fund
              </Text>
            </Flex>
            <Text
              mt={5}
              width={550}
              fontSize="lg"
              textAlign="left"
              color="white"
              fontWeight="normal"
            >
              Devil Fund supports startups/projects/experiments that successfully spot the vulnerability of modern products/services and act to destroy with new solutions, not patch, the old systems.
            </Text>
            {/* <Button
              mt={10}
              bg="white"
              color="black"
              mb={10}
              backdropFilter="blur(15px)"
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
            >
              Apply to Devil
            </Button> */}
          </Box>
        </Box>
        <Box right={0}>
          <Text
            fontSize="4xl"
            lineHeight="1.5"
            textAlign="center"
            color="#950000"
            fontWeight="bold"
          >
            Capital Raised
          </Text>
          <Text
            mb={50}
            fontSize="4xl"
            lineHeight="1.5"
            textAlign="center"
            color="#ffffff"
            fontWeight="bold"
          >
            $600,000
          </Text>
          <Text
            fontSize="4xl"
            lineHeight="1.5"
            textAlign="center"
            color="#950000"
            fontWeight="bold"
          >
            Comment Received
          </Text>
          <Text
            mb={50}
            fontSize="4xl"
            lineHeight="1.5"
            textAlign="center"
            color="#ffffff"
            fontWeight="bold"
          >
            30,000
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default DevilFundInfo;
