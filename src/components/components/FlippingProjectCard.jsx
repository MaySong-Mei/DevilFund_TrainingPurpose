import React, { useState } from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

function FlippingProjectCard({ title, imageSrc, backContent }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <Box
        perspective="1000px" // Defines the 3D space
        width="200px"
        height="120px"
        m={3}
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
          textAlign="center"
          transition="transform 0.6s"
          transformStyle="preserve-3d"
          transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
          onClick={handleFlip}
          cursor="pointer"
        >
          {/* Front Side */}
          <Box
            position="absolute"
            width="100%"
            height="100%"
            backfaceVisibility="hidden"
            bg="#0a1015"
            borderRadius="3xl"
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
            border="1px solid gray"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.8)",
            }}
            transition="transform 0.2s, box-shadow 0.2s"
          >
            {/* Image Section */}
            <Flex justify="center" align="center" height="60%">
              <Image
                src={imageSrc}
                alt={title}
                boxSize="70px"
                objectFit="cover"
                borderRadius="md"
              />
            </Flex>
  
            {/* Title Section */}
            <Text
              mt={4}
              fontSize="sm"
              color="#ffffff"
              fontWeight="bold"
            >
              {title}
            </Text>
          </Box>
  
          {/* Back Side */}
          <Box
            position="absolute"
            width="100%"
            height="100%"
            backfaceVisibility="hidden"
            bg="#1a202c"
            borderRadius="3xl"
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
            border="1px solid gray"
            transform="rotateY(180deg)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={4}
          >
            {/* Back Content */}
            <Text
              fontSize="sm"
              color="#ffffff"
            >
              {backContent}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default FlippingProjectCard;
  