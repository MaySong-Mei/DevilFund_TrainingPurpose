import { Box, AspectRatio } from "@chakra-ui/react";

function ShowcaseVideo({ 
  videoUrl, 
  isExpanded, 
  isPlaying, 
  onPlayPause 
}) {
  return (
    <Box position="relative" width="100%" height="100%">
      <AspectRatio ratio={16 / 9} width="100%" height="100%">
        <Box
          as="video"
          src={videoUrl}
          autoPlay={isExpanded}
          loop
          muted
          playsInline
          preload="metadata"
          ref={(el) => {
            if (el && isExpanded) {
              el.controls = false;
              isPlaying ? el.play() : el.pause();
            }
          }}
          borderRadius="0"
          objectFit="cover"
        />
      </AspectRatio>
      
      {isExpanded && (
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
            onPlayPause();
          }}
          _hover={{
            bg: "rgba(0, 0, 0, 0.8)",
            transform: "scale(1.1)",
          }}
          transition="all 0.2s"
        >
          {isPlaying ? "⏸" : "▶"}
        </Box>
      )}
    </Box>
  );
}

export default ShowcaseVideo; 