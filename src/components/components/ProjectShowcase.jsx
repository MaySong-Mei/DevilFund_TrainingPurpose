import { Box, Flex, Heading, Text, Button, Link, AspectRatio, Image } from "@chakra-ui/react";
import { useState } from "react";

// Time: 2024-12-02, Save

function ProjectShowcase() {
  const [expandedBox, setExpandedBox] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleBoxClick = (side) => {
    setExpandedBox(expandedBox === side ? null : side);
  };
// Save
  // 修改未展开时的内容渲染
  const renderCollapsedContent = (side) => {
    return (
      <AspectRatio 
        ratio={16 / 9} 
        width="100%"
        height="100%"
      >
        <Box
          as="video"
          src="/path/to/your/video.mp4"
          preload="metadata"
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius="0"
        />
      </AspectRatio>
    );
  };

  // 修改展开状态的视频播放器
  const renderExpandedContent = (side) => {
    if (!expandedBox || expandedBox !== side) return null;

    return (
      <Box position="relative" width="100%" height="100%">
        <AspectRatio 
          ratio={16 / 9} 
          width="100%"
          height="100%"
        >
          <Box
            as="video"
            src="/path/to/your/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            ref={(el) => {
              if (el) {
                el.controls = false;
                isPlaying ? el.play() : el.pause();
              }
            }}
            borderRadius="0"
            objectFit="cover"
          />
        </AspectRatio>
        
        {/* 播放/暂停按钮 */}
        <Box
          position="absolute"
          bottom="8"
          left="8"
          bg="rgba(0, 0, 0, 0.7)"
          borderRadius="full"
          width="40px"
          height="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          cursor="pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(!isPlaying);
          }}
          _hover={{
            bg: "rgba(0, 0, 0, 0.8)",
            transform: "scale(1.1)",
          }}
          transition="all 0.2s"
        >
          {isPlaying ? "⏸" : "▶"}
        </Box>
      </Box>
    );
  };

  // 修改额外内容的渲染函数
  const renderExtraContent = (side) => {
    if (!expandedBox || expandedBox !== side) return null;

    const content = {
      left: {
        logo: "match:Point",
        title: "match:Point",
        subtitle: "Student Project and Job Finding",
        description: "MatchPoint creates a seamless connection between students, professors, and industry leaders, fostering collaboration through research projects, internships, and startup opportunities."
      },
      right: {
        logo: "Good Energy Network",
        title: "Good Energy Network",
        subtitle: "Sustainable Energy Solutions",
        description: "Building a decentralized clean energy network that enables communities to generate, store, and trade renewable energy efficiently."
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
        opacity={expandedBox === side ? 1 : 0}
        transition="opacity 0.3s ease"
      >
        <Flex 
          direction="column" 
          height="100%" 
          justify="space-between"
        >
          {/* 上部分：Logo和项目信息 */}
          <Flex gap={8} mb={8}>
            {/* Logo容器 */}
            <Box 
              width="60px" 
              height="60px" 
              bg="gray.100" 
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* 这里可以替换为实际的Logo */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" fill="#718096"/>
              </svg>
            </Box>

            {/* 文字部分容器 */}
            <Flex 
              direction="column" 
              justify="center"
            >
              <Heading 
                as="h3" 
                size="lg"
                color="gray.900"
                fontWeight="semibold"
                mb={1}
              >
                {content[side].title}
              </Heading>
              <Text 
                fontSize="md" 
                color="gray.600"
                fontWeight="normal"
              >
                {content[side].subtitle}
              </Text>
            </Flex>
          </Flex>
{/* Save */}
          {/* 中部：项目描述 */}
          <Text 
            fontSize="md" 
            color="gray.600" 
            my={8}
          >
            {content[side].description}
          </Text>

          {/* 底部：链接和按钮 */}
          <Flex justify="space-between" align="flex-end">
            {/* 左侧链接 */}
            <Flex 
              direction="column" 
              gap={2}
            >
              <Link
                color="gray.700"
                fontSize="md"
                _hover={{ color: "gray.900" }}
              >
                → Team & Partners
              </Link>
              <Link
                color="gray.700"
                fontSize="md"
                _hover={{ color: "gray.900" }}
              >
                → Impact Report
              </Link>
              <Link
                color="gray.700"
                fontSize="md"
                _hover={{ color: "gray.900" }}
              >
                → Technical Documentation
              </Link>
            </Flex>

            {/* 右侧按钮 */}
            <Button
              bg="black"
              color="white"
              size="md"
              px={6}
              _hover={{
                bg: "gray.800",
              }}
            >
              Open Demo
            </Button>
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
            maxW={{ base: "100%", md: expandedBox === 'left' ? "52%" : "49%" }}
            bg="white"
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
            {expandedBox === 'left' ? renderExpandedContent('left') : renderCollapsedContent('left')}

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
            maxW={{ base: "100%", md: expandedBox === 'right' ? "52%" : "49%" }}
            bg="white"
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
            {expandedBox === 'right' ? renderExpandedContent('right') : renderCollapsedContent('right')}

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