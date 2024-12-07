import { Box, Container, Stack, Heading, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaChartLine } from "react-icons/fa";
import AnimatedBackground from './AnimatedBackground';
import AnimatedBackground_random from './AnimatedBackground_random';
import DevilFundInfo from "./DevilFundInfo";

const HeroSection = () => {
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
      {/* 背景动画 */}
      {/* <AnimatedBackground /> */}
      <AnimatedBackground_random />

      {/* 内容区域 */}
      {/* <DevilFundInfo /> */}
      <Container 
        maxW="container.xl" 
        position="relative" 
        zIndex={1}
      >
        <Stack
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          spacing={12}
          align="center"
          py={20}
        >
          {/* 主标题 */}
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            color="gray.800"
            textAlign="center"
            fontWeight="bold"
            maxW="800px"
          >
            重新定义创业孵化的未来
          </Heading>

          {/* Feature 部分 */}
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

          {/* CTA按钮 */}
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

// Feature 组件
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