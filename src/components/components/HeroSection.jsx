import { Box, Container, Stack, Heading, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { FaUser, FaUserTie, FaHandshake } from "react-icons/fa";
import AnimatedBackground_random from './AnimatedBackground_random';
import AnimatedBackground_undirected from './AnimatedBackground_undirected';
import IntroAnimation from './IntroAnimation';
import { useState } from 'react';

//Todo: 
//1. 添加动画：小点聚集成NoPitch或者聚集成build, prove, scale
//2. 添加Vistor, Founder, Investor三个角色button入口 [Done]
//3. 根据角色不同，背景颜色不同 [Done] [需要优化]
//4. 不同角色进入后，粒子动画不同

//Save

const glow = (color) => keyframes`
  0%, 100% {
    text-shadow: 
      0 0 4px ${color}33,
      0 0 8px ${color}33,
      0 0 12px ${color}33;
  }
  50% {
    text-shadow: 
      0 0 8px ${color}80,
      0 0 16px ${color}80,
      0 0 24px ${color}80;
  }
`;

const HeroSection = () => {
  const [selectedRole, setSelectedRole] = useState('founder');
  const [showContent, setShowContent] = useState(false);

  const getBgColor = (role) => {
    switch(role) {
      case 'founder':
        return 'black';
      default:
        return 'white';
    }
  };

  const getHeadingText = (role) => {
    switch(role) {
      case 'visitor':
        return 'Watch, Something is Changing';
      case 'founder':
        return 'Build, Prove, Scale. No Fluff.';
      case 'investor':
        return 'Invest, Before it Gets Too Big';
      default:
        return 'Watch, Something is Changing';
    }
  };

  const getHeadingColor = (role) => {
    switch(role) {
      case 'founder':
        return 'green.50';
      case 'investor':
        return 'blue.800';
      default:
        return 'green.800';
    }
  };

  const getThemeColor = (role) => {
    switch(role) {
      case 'investor':
        return 'rgba(49, 130, 206, 1)'; // blue.500
      default:
        return 'rgba(52, 211, 153, 1)'; // green.400
    }
  };

  const getLogoColor = (role) => {
    switch(role) {
      case 'investor':
        return 'blue.400';
      default:
        return 'green.400';
    }
  };

  return (
    <Box
      minHeight="100vh"
      width="100%"
      position="relative"
      bg={getBgColor(selectedRole)}
      overflow="hidden"
      display="flex"
      alignItems="center"
      transition="all 0.3s ease"
    >
      <IntroAnimation onComplete={() => setShowContent(true)} />
      {selectedRole === 'investor' ? (
        <AnimatedBackground_undirected />
      ) : (
        <AnimatedBackground_random 
          particleColor={getThemeColor(selectedRole)}
        />
      )}

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
          onClick={() => {/* Add logo click routing logic */}}
        >
          <Text
            fontSize="6xl"
            fontWeight="bold"
            color={getLogoColor(selectedRole)}
            css={{
              animation: `${glow(getThemeColor(selectedRole))} 20s ease-in-out infinite`,
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
            borderColor={getLogoColor(selectedRole)}
            borderRadius="full"
            background="transparent"
          >
            <Text
              fontSize="md"
              color={getLogoColor(selectedRole)}
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
            color={getHeadingColor(selectedRole)}
            textAlign="center"
            fontWeight="bold"
            maxW="1000px"
          >
            {getHeadingText(selectedRole)}
          </Heading>

          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            spacing={{ base: 8, md: 16 }}
            w="100%"
            maxW="1200px"
            pt={10}
          >
            <RoleButton
              icon={FaUser}
              title="Visitor"
              subtitle="Explore innovative projects."
              isSelected={selectedRole === 'visitor'}
              onClick={() => setSelectedRole('visitor')}
              isDarkMode={selectedRole === 'founder'}
            />
            <RoleButton
              icon={FaUserTie}
              title="Founder"
              subtitle="Get support and guidance."
              isSelected={selectedRole === 'founder'}
              onClick={() => setSelectedRole('founder')}
              isDarkMode={selectedRole === 'founder'}
            />
            <RoleButton
              icon={FaHandshake}
              title="Investor"
              subtitle="Discover quality investments."
              isSelected={selectedRole === 'investor'}
              onClick={() => setSelectedRole('investor')}
              isDarkMode={selectedRole === 'founder'}
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

const RoleButton = ({ title, subtitle, icon: Icon, onClick, isSelected, isDarkMode }) => (
  <Box
    width="100%"
    display="flex"
    flexDirection="column"
    alignItems="center"
    gap={3}
  >
    <Button
      onClick={onClick}
      w={16}
      h={16}
      bg={isSelected ? (isDarkMode ? "gray.800" : "gray.50") : "transparent"}
      border="2px solid"
      borderColor={isSelected ? "green.400" : isDarkMode ? "white" : "gray.800"}
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color={isSelected ? "green.400" : isDarkMode ? "white" : "gray.800"}
      transition="all 0.3s ease"
      _hover={{ 
        borderColor: "green.400",
        color: "green.400",
        bg: isDarkMode ? "gray.800" : "gray.50"
      }}
    >
      <Icon size={28} />
    </Button>
    
    <Text 
      fontWeight="bold" 
      fontSize="xl" 
      color={isDarkMode ? "white" : "gray.800"}
      textAlign="center"
    >
      {title}
    </Text>
    
    <Text
      fontSize="sm"
      color={isDarkMode ? "gray.300" : "gray.600"}
      textAlign="center"
      maxW="300px"
    >
      {subtitle}
    </Text>
  </Box>
);

export default HeroSection; 