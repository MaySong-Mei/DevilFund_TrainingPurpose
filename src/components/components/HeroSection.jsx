import { Box, Container, Stack, Heading, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaChartLine } from "react-icons/fa";
import AnimatedBackground_random from './AnimatedBackground_random';
import IntroAnimation from './IntroAnimation';
import { useState } from 'react';

//Todo: 
//1. 添加动画：小点聚集成NoPitch或者聚集成build, prove, scale
//2. 添加Vistor, Founder, Investor三个角色button入口

const glow = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 4px rgba(52, 211, 153, 0.3),
      0 0 8px rgba(52, 211, 153, 0.3),
      0 0 12px rgba(52, 211, 153, 0.3);
  }
  50% {
    text-shadow: 
      0 0 8px rgba(52, 211, 153, 0.5),
      0 0 16px rgba(52, 211, 153, 0.5),
      0 0 24px rgba(52, 211, 153, 0.5);
  }
`;

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Box
      minHeight="100vh"
      width="100%"
      position="relative"
      bg="white"
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      <IntroAnimation onComplete={() => setShowContent(true)} />
      <AnimatedBackground_random />

      <Container 
        maxW="container.xl" 
        position="relative" 
        zIndex={1}
      >
        <Box
          position="absolute"
          top="20px"
          left="50%"
          transform="translateX(-50%)"
          width="400px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text
            fontSize="6xl"
            fontWeight="bold"
            color="green.400"
            css={{
              animation: `${glow} 20s ease-in-out infinite`,
              letterSpacing: "1px"
            }}
          >
            NoPitch
          </Text>
          <Box
            px="8px"
            py="1px"
            mt="-10px"
            border="0px solid"
            borderColor="green.400"
            borderRadius="full"
            background="transparent"
          >
            <Text
              fontSize="md"
              color="green.500"
              letterSpacing="3px"
              textTransform="uppercase"
            >
              Startup Originator
            </Text>
          </Box>
        </Box>

        <Stack
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          spacing={12}
          align="center"
          py={20}
          mt="100px"
        >
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            color="green.800"
            textAlign="center"
            fontWeight="bold"
            maxW="1000px"
          >
            Build, Prove, Scale. No Fluff.
          </Heading>

          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            spacing={{ base: 8, md: 16 }}
            w="100%"
            maxW="1200px"
            pt={10}
          >
            <Feature
              icon={FaLightbulb}
              title="原创孵化"
              text="从零开始构建创新项目"
            />
            <Feature
              icon={FaRocket}
              title="深度赋能"
              text="全方位资源支持"
            />
            <Feature
              icon={FaChartLine}
              title="长远发展"
              text="打造可持续成长的创业生态"
            />
          </SimpleGrid>

          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            size="lg"
            bg="gray.800"
            color="white"
            _hover={{
              bg: "gray.700",
            }}
            mt={8}
          >
            了解更多
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

const Feature = ({ title, text, icon: Icon }) => (
  <Stack 
    as={motion.div}
    whileHover={{ y: -5 }}
    align="center" 
    textAlign="center"
    spacing={4}
    p={6}
  >
    <Box
      w={16}
      h={16}
      bg="transparent"
      border="2px solid"
      borderColor="gray.800"
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="gray.800"
    >
      <Icon size={28} />
    </Box>
    <Text 
      fontWeight="bold" 
      fontSize="xl" 
      color="gray.800"
    >
      {title}
    </Text>
    <Text 
      color="gray.600"
      fontSize="sm"
    >
      {text}
    </Text>
  </Stack>
);

export default HeroSection; 