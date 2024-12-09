import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import ShowcaseVideo from "./ShowcaseVideo";
import ShowcaseContent from "./ShowcaseContent";

function ProjectShowcaseContent({ projects }) {
  const [expandedBox, setExpandedBox] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleBoxClick = (side) => {
    setExpandedBox(expandedBox === side ? null : side);
  };

  const renderShowcaseBox = (side) => {
    const project = projects[side];
    const isExpanded = expandedBox === side;
    const isHovered = hoveredBox === side;
    const isOpposite = expandedBox && expandedBox !== side;

    return (
      <Box
        position="relative"
        flex="1"
        minW={{ base: "100%", md: "49%" }}
        maxW={{ base: "100%", md: isExpanded ? "52%" : "49%" }}
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        transition="all 0.5s ease"
        transform={
          isOpposite ? `translateX(${side === 'left' ? '-100%' : '100%'})` :
          isExpanded ? "scale(1.06)" : "scale(1)"
        }
        transformOrigin={`${side} top`}
        opacity={isOpposite ? 0 : 1}
        cursor="pointer"
        onClick={() => handleBoxClick(side)}
        boxShadow={isExpanded ? "xl" : "none"}
        onMouseEnter={() => setHoveredBox(side)}
        onMouseLeave={() => setHoveredBox(null)}
        _hover={{
          boxShadow: "xl",
          transform: isExpanded ? "scale(1.06)" : "translateY(-2px)"
        }}
      >
        <ShowcaseVideo
          videoUrl={project.videoUrl}
          isExpanded={isExpanded}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
        />
        
        <Text
          position="absolute"
          bottom="-40px"
          {...(side === 'left' ? { left: -5, pl: 8 } : { right: -5, pr: 8 })}
          fontSize="lg"
          color="gray.600"
          fontWeight="semibold"
          letterSpacing="wide"
          transform={`translateY(${isHovered ? '0' : '-10px'})`}
          opacity={isHovered ? 1 : 0}
          transition="all 0.3s ease"
          textAlign={side === 'right' ? "right" : "left"}
        >
          {project.title.toUpperCase()}
        </Text>
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
      {renderShowcaseBox('left')}
      {renderShowcaseBox('right')}

      {expandedBox && (
        <Box
          position="absolute"
          top={0}
          {...(expandedBox === 'left' 
            ? { left: "54%" } 
            : { right: "54%" }
          )}
          width="42%"
          height="100%"
          p={8}
          opacity={1}
          transition="opacity 0.3s ease"
        >
          <ShowcaseContent project={projects[expandedBox]} />
        </Box>
      )}
    </Flex>
  );
}

export default ProjectShowcaseContent; 