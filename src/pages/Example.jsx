import { Button, Heading, Text, Link, Box, Flex, Image } from "@chakra-ui/react";
import MainNavBar from "@/components/components/mainNavbar";


function Example() {
  return (
    <>
        <MainNavBar />
        <Box bg="transparent" color="text.primary" position="relative" border="2px solid red" p={10}>
            <Heading size="4xl">Devil Fund</Heading>
            <Text size="lg" lineHeight="0.5" mb={5}>©portalle,Inc</Text>
            
            <Box border="2px solid blue" mt={30}>
                <Image
                    src="/images/Dark-Blue-Vortex.svg"
                    alt="Vortex"
                    position="absolute"
                    opacity={0.8}
                    zIndex={-1}
                    border="2px solid white"
                /> 
                <Flex mt={80}>
                    <Text
                        fontSize="4xl"
                        lineHeight="1.5"
                        textAlign="left"
                        color="white"
                        fontWeight="bold"
                        >
                        Why
                    </Text>
                    <Text
                        fontSize="2xl"
                        lineHeight="1.5"
                        textAlign="left"
                        color="brand.500"
                        fontWeight="bold"
                        >
                        Devil Fund
                    </Text>
                </Flex>
                <Text
                    fontSize="lg"
                    lineHeight="1.5"
                    textAlign="center"
                    color="white"
                    fontWeight="bold"
                    >
                    Devil Fund supports startups/projects/experiments that successfully spot the vulnerability of modern products/services and act to destroy with new solutions, not patch, the old systems.
                </Text>
            </Box> 
            
            
            <Box mt={10}>
                
            </Box>

            {/* <Text textStyle="body" mt={2}>
                Devil Fund supports startups/projects/experiments that successfully spot
                vulnerabilities of modern systems.
            </Text>
            <Text textStyle="countdown" mt={6}>18 days left</Text>
            <Flex gap={4} mt={6}>
                <Button>Apply to Devil</Button>
                <Button variant="outline">Learn More</Button>
            </Flex>
            <Link href="#" mt={4} display="block">
                About Devil Fund
            </Link> */}
        </Box>
    </>
  );
}

export default Example;
