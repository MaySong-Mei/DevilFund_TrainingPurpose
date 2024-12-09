import { Box, Flex, Text, Button, Link, AspectRatio, Heading } from "@chakra-ui/react";
import { useState } from "react";
import showcaseProjects from "@/data/showcaseProjects";

function ProjectShowcaseContent() {
  const [expandedBox, setExpandedBox] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleBoxClick = (side) => {
    setExpandedBox(expandedBox === side ? null : side);
  };

  // 修改未展开时的内容渲染
  const renderCollapsedContent = (side) => {
    return (
      <AspectRatio ratio={16 / 9} width="100%" height="100%">
        <Box
          as="video"
          src="public\videos\showcase\AE_video.mov"
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
        <AspectRatio ratio={16 / 9} width="100%" height="100%">
          <Box
            as="video"
            src="public\videos\showcase\AE_video.mov"
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

    const project = showcaseProjects[side];

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
        <Flex direction="column" height="100%" justify="space-between">
          {/* 上部分：Logo和项目信息 */}
          <Flex gap={8} mb={8}>
            <Box 
              width="60px" 
              height="60px" 
              bg="gray.100" 
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {project.logo}
            </Box>

            <Flex direction="column" justify="center">
              <Heading 
                as="h3" 
                size="lg"
                color="gray.900"
                fontWeight="semibold"
                mb={1}
              >
                {project.title}
              </Heading>
              <Text 
                fontSize="md" 
                color="gray.600"
                fontWeight="normal"
              >
                {project.subtitle}
              </Text>
            </Flex>
          </Flex>

          {/* 中部：项目描述 */}
          <Text fontSize="md" color="gray.600" my={8}>
            {project.description}
          </Text>

          {/* 底部：链接和按钮 */}
          <Flex justify="space-between" align="flex-end">
            <Flex direction="column" gap={2}>
              {project.links.map((link, index) => (
                <Link
                  key={index}
                  color="gray.700"
                  fontSize="md"
                  _hover={{ color: "gray.900" }}
                  href={link.url}
                >
                  → {link.text}
                </Link>
              ))}
            </Flex>

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
    <Flex 
      gap={1} 
      width="100%" 
      flexWrap="wrap" 
      justify="space-between" 
      position="relative"
      mb={40}
    >
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
        >
          MATCH:POINT
        </Text>
      </Box>

      {/* 右侧卡片 */}
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
  );
}

export default ProjectShowcaseContent; 