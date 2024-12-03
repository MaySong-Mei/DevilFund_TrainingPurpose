import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import { useState } from "react";

// Time: 2024-12-02, Save

function ProjectShowcase() {
  const [expandedBox, setExpandedBox] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleBoxClick = (side) => {
    setExpandedBox(expandedBox === side ? null : side);
  };

  // 额外内容区域的渲染函数
  const renderExtraContent = (side) => {
    if (!expandedBox || expandedBox !== side) return null;

    const content = {
      left: {
        title: "AI-Powered Healthcare Assistant",
        problem: "Healthcare Accessibility Gap",
        features: [
          "Real-time health monitoring",
          "Predictive diagnosis assistance",
          "Personalized treatment recommendations",
          "Remote consultation platform"
        ],
        description: "Leveraging artificial intelligence to bridge the healthcare accessibility gap in underserved communities, providing 24/7 medical guidance and support. Leveraging artificial intelligence to bridge the healthcare accessibility gap in underserved communities, providing 24/7 medical guidance and support."
      },
      right: {
        title: "Sustainable Energy Network",
        problem: "Clean Energy Distribution",
        features: [
          "Smart grid integration",
          "Peer-to-peer energy trading",
          "Renewable source optimization",
          "Community power sharing"
        ],
        description: "Building a decentralized clean energy network that enables communities to generate, store, and trade renewable energy efficiently. Leveraging artificial intelligence to bridge the healthcare accessibility gap in underserved communities, providing 24/7 medical guidance and support."
      }
    };

    return (
      <Box
        position="absolute"
        top={0}
        left={side === 'left' ? "54%" : "auto"}
        right={side === 'right' ? "54%" : "auto"}
        width="42%"
        height="100%"
        p={8}
        pl={side === 'right' ? 0 : 8}
        pr={side === 'left' ? 0 : 8}
        opacity={expandedBox === side ? 1 : 0}
        transition="opacity 0.3s ease"
        pointerEvents={expandedBox === side ? "auto" : "none"}
        textAlign="left"
      >
        <Flex
          direction="column"
          height="100%"
          justify="space-between"
          ml={side === 'right' ? 0 : "auto"}
          mr={side === 'left' ? 0 : "auto"}
        >
          {/* 上部分：标题和主要内容 */}
          <Box>
            <Heading
              as="h3"
              size="lg"
              color="gray.800"
              mb={6}
              fontWeight="medium"
            >
              {content[side].title}
            </Heading>

            <Box mb={8}>
              <Text
                fontSize="md"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={2}
              >
                Social Impact
              </Text>
              <Text
                fontSize="lg"
                color="gray.700"
                fontWeight="medium"
                mb={4}
              >
                {content[side].problem}
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                lineHeight="tall"
                mb={6}
              >
                {content[side].description}
              </Text>
            </Box>

            <Box mb={8}>
              <Text
                fontSize="md"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={3}
              >
                Key Features
              </Text>
              <Flex direction="column" gap={2}>
                {content[side].features.map((feature, index) => (
                  <Text
                    key={index}
                    fontSize="md"
                    color="gray.700"
                  >
                    • {feature}
                  </Text>
                ))}
              </Flex>
            </Box>

            <Button
              size="lg"
              bg="gray.900"
              color="white"
              px={8}
              height="56px"
              _hover={{
                bg: "gray.800",
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.2s"
            >
              Open Demo
            </Button>
          </Box>

          {/* 下部分：链接区 */}
          <Flex 
            direction="column" 
            gap={4}
            maxW="90%"
            mt={8}
          >
            <Link
              color="gray.700"
              fontSize="lg"
              _hover={{ color: "gray.900", textDecoration: "none" }}
            >
              → Technical Documentation
            </Link>
            <Link
              color="gray.700"
              fontSize="lg"
              _hover={{ color: "gray.900", textDecoration: "none" }}
            >
              → Impact Report
            </Link>
            <Link
              color="gray.700"
              fontSize="lg"
              _hover={{ color: "gray.900", textDecoration: "none" }}
            >
              → Team & Partners
            </Link>
          </Flex>
        </Flex>
      </Box>
    );
  };

  return (
    <Box minHeight="100vh" width="100%" bg="white" position="relative" py={10}>
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
              mb={5}
            //   border="1px solid blue"
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

        {/* 内容部分 */}
        <Flex gap={1} width="100%" flexWrap="wrap" justify="space-between" position="relative">
          <Box
            position="relative"
            flex="1"
            minW={{ base: "100%", md: "49%" }}
            maxW={{ base: "100%", md: expandedBox === 'left' ? "52%" : 
              expandedBox === 'right' ? "0%" : "49%" 
            }}
            bg="gray.50"
            p={8}
            height={expandedBox === 'left' ? "auto" : "600px"}
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.5s ease"
            transform={
              expandedBox === 'right' ? "translateX(-100%)" :
              expandedBox === 'left' ? "scale(1.06)" : "scale(1)"
            }
            transformOrigin="left top"
            opacity={expandedBox === 'right' ? 0 : 1}
            cursor="pointer"
            onClick={() => handleBoxClick('left')}
            boxShadow={expandedBox === 'left' ? "xl" : "none"}
            onMouseEnter={() => setHoveredBox('left')}
            onMouseLeave={() => setHoveredBox(null)}
            _hover={{
              boxShadow: "xl",
              transform: expandedBox === 'left' ? "scale(1.06)" : "translateY(-2px)"
            }}
          >
            {expandedBox === 'left' ? (
              // 展开时的详细内容
              <Box>
                <Heading size="xl" mb={6}>Detailed Project Information</Heading>
                <Text fontSize="xl" color="gray.700" mb={4}>
                  Start your journey with Devil Fund's innovative projects that challenge the status quo and create meaningful impact.
                </Text>
                <Text fontSize="lg" color="gray.600" mb={4}>
                  Our projects focus on:
                  • Revolutionary technology solutions
                  • Sustainable development
                  • Social impact initiatives
                  • Market-disrupting innovations
                </Text>
                <Text fontSize="lg" color="gray.600" mb={6}>
                  We provide comprehensive support including:
                  • Financial backing
                  • Technical expertise
                  • Market access
                  • Strategic guidance
                </Text>
                <Button
                  size="lg"
                  bg="gray.900"
                  color="white"
                  _hover={{ bg: "gray.700" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    // 处理按钮点击
                  }}
                >
                  Learn More About Projects
                </Button>
                <Button
                  size="lg"
                  ml={4}
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedBox(null);
                  }}
                >
                  Close
                </Button>
              </Box>
            ) : (
              // 未展开时的简略内容
              <>
                <Text fontSize="xl" color="gray.700" mb={4}>
                  Start your journey with Devil Fund's innovative projects that challenge the status quo and create meaningful impact.
                </Text>
                <Button
                  size="lg"
                  bg="gray.900"
                  color="white"
                  _hover={{ bg: "gray.700" }}
                  mt={4}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBoxClick('left');
                  }}
                >
                  Explore Projects
                </Button>
              </>
            )}

            {/* 左边卡片的项目名称 - 左对齐 */}
            <Text
              position="absolute"
              bottom="-40px"
              left={-5}
              pl={8}
              fontSize="lg"
              color="gray.600"
              fontWeight="semibold"
              letterSpacing="wide"
              transform={`translateY(${hoveredBox === 'left' ? '0' : '-10px'})`}
              opacity={hoveredBox === 'left' ? 1 : 0}
              transition="all 0.3s ease"
            //   border="1px solid red"
            >
              MATCH:POINT
            </Text>
          </Box>

          <Box
            position="relative"
            flex="1"
            minW={{ base: "100%", md: "49%" }}
            maxW={{ base: "100%", md: expandedBox === 'right' ? "52%" :
              expandedBox === 'left' ? "0%" : "49%"
            }}
            bg="gray.50"
            p={8}
            height={expandedBox === 'right' ? "auto" : "600px"}
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.5s ease"
            transform={
              expandedBox === 'left' ? "translateX(100%)" :
              expandedBox === 'right' ? "scale(1.06)" : "scale(1)"
            }
            transformOrigin="right top"
            opacity={expandedBox === 'left' ? 0 : 1}
            cursor="pointer"
            onClick={() => handleBoxClick('right')}
            boxShadow={expandedBox === 'right' ? "xl" : "none"}
            onMouseEnter={() => setHoveredBox('right')}
            onMouseLeave={() => setHoveredBox(null)}
            _hover={{
              boxShadow: "xl",
              transform: expandedBox === 'right' ? "scale(1.06)" : "translateY(-2px)"
            }}
          >
            {expandedBox === 'right' ? (
              // 展开时的详细内容
              <Box>
                <Heading size="xl" mb={6}>Join Our Community</Heading>
                <Text fontSize="xl" color="gray.700" mb={4}>
                  Be part of a thriving ecosystem of innovators and disruptors who are reshaping industries through groundbreaking solutions.
                </Text>
                <Text fontSize="lg" color="gray.600" mb={4}>
                  Community benefits include:
                  • Network with industry leaders
                  • Access to exclusive events
                  • Collaborative opportunities
                  • Resource sharing
                </Text>
                <Text fontSize="lg" color="gray.600" mb={6}>
                  Member privileges:
                  • Priority project consideration
                  • Mentorship programs
                  • Investment opportunities
                  • Regular workshops
                </Text>
                <Button
                  size="lg"
                  bg="gray.900"
                  color="white"
                  _hover={{ bg: "gray.700" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    // 处理按钮点击
                  }}
                >
                  Join Now
                </Button>
                <Button
                  size="lg"
                  ml={4}
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedBox(null);
                  }}
                >
                  Close
                </Button>
              </Box>
            ) : (
              // 未展开时的简略内容
              <>
                <Text fontSize="xl" color="gray.700" mb={4}>
                  Join our community of innovators and disruptors who are reshaping industries through groundbreaking solutions.
                </Text>
                <Button
                  size="lg"
                  bg="gray.900"
                  color="white"
                  _hover={{ bg: "gray.700" }}
                  mt={4}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBoxClick('right');
                  }}
                >
                  Join Community
                </Button>
              </>
            )}

            {/* 右边卡片的项目名称 - 右对齐 */}
            <Text
              position="absolute"
              bottom="-40px"
              right={-5}
              pr={8}
              fontSize="lg"
              color="gray.600"
              fontWeight="semibold"
              letterSpacing="wide"
              transform={`translateY(${hoveredBox === 'right' ? '0' : '-10px'})`}
              opacity={hoveredBox === 'right' ? 1 : 0}
              transition="all 0.3s ease"
              textAlign="right"
            >
              GOOD ENERGY NETWORK
            </Text>
          </Box>

          {/* 渲染额外内容区域 */}
          {renderExtraContent('left')}
          {renderExtraContent('right')}
        </Flex>
      </Flex>
    </Box>
  );
}

export default ProjectShowcase; 