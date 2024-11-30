import { Flex, Text } from "@chakra-ui/react";

export default function HeaderSection() {
  return (
    <Flex
      flexDir="column"
      color="white"
      ml={{ base: "2vh", md: "5vh" }}
      mt={{ base: "2vh", md: "5vh" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Text
        textStyle="7xl"
        fontFamily="'Open Sans', sans-serif"
        fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
      >
        Devil Fund
      </Text>
      <Text
        fontFamily="'Open Sans', sans-serif"
        mt="-10px"
        fontSize={{ base: "sm", md: "md" }}
      >
        ©portalle, Inc
      </Text>
    </Flex>
  );
}
