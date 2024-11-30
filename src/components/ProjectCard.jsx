import { 
  Box, 
  Image, 
  Text, 
  Flex, 
  useDisclosure,
  Tabs
} from "@chakra-ui/react";
import { 
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogBody 
} from "@/components/ui/dialog";
import { 
  LuPlay,
  LuLineChart,
  LuMessageSquare 
} from "react-icons/lu";
import { memo } from "react";

const ProjectCardNew = memo(({ 
  title,
  imageSrc,
  description,
  techStack = [],
  demoVideoUrl,
  progressList = [],
  commentsList = []
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DialogRoot size="lg" isOpen={isOpen} onClose={onClose}>
      <DialogTrigger asChild>
        <Box
          borderRadius="xl"
          m={3}
          textAlign="center"
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.6)"
          width="200px"
          height="60px"
          border="1px solid gray"
          backdropFilter="blur(15px)"
          backgroundColor="rgba(255, 255, 255, 0.9)"
          cursor="pointer"
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.8)",
          }}
          onClick={onOpen}
        >
          <Flex justify="center" align="center" height="70%" mx={3}>
            <Image
              src={imageSrc}
              alt={title}
              mt={5}
              objectFit="contain"
              borderRadius="md"
            />
          </Flex>
        </Box>
      </DialogTrigger>

      <DialogContent 
        maxW="1000px"
        w="90vw"
        bg="#1a1a1a"
        color="white"
        borderRadius="xl"
        p={0}
      >
        <DialogHeader borderBottom="1px solid" borderColor="whiteAlpha.200" p={4}>
          <Flex align="center" gap={4}>
            <Box width="40px" height="40px">
              <Image
                src={imageSrc}
                alt={title}
                width="full"
                height="full"
                objectFit="contain"
                borderRadius="lg"
              />
            </Box>
            <DialogTitle fontSize="xl" fontWeight="bold">
              {title}
            </DialogTitle>
          </Flex>
        </DialogHeader>

        <DialogBody p={0}>
          <Flex>
            {/* Left Info Section */}
            <Box 
              w="300px"
              borderRight="1px solid"
              borderColor="whiteAlpha.200"
              p={6}
            >
              <Text fontSize="lg" fontWeight="bold" mb={4} color="pink.400">
                Project Overview
              </Text>
              <Text color="whiteAlpha.900" mb={6}>
                {description}
              </Text>
              
              <Text fontSize="lg" fontWeight="bold" mb={4} color="pink.400">
                Tech Stack
              </Text>
              <Flex wrap="wrap" gap={2} mb={6}>
                {techStack.map((tech) => (
                  <Box
                    key={tech}
                    bg="whiteAlpha.200"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                  >
                    {tech}
                  </Box>
                ))}
              </Flex>
            </Box>

            {/* Right Tabs Section */}
            <Box flex={1}>
              <Tabs.Root defaultValue="demo" variant="enclosed">
                <Tabs.List px={4} pt={4} borderBottom="1px solid" borderColor="whiteAlpha.200">
                  <Tabs.Trigger 
                    value="demo"
                    _selected={{ bg: 'pink.500', color: 'white' }}
                  >
                    <Flex align="center" gap={2}>
                      <LuPlay />
                      Demo
                    </Flex>
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="progress"
                    _selected={{ bg: 'pink.500', color: 'white' }}
                  >
                    <Flex align="center" gap={2}>
                      <LuLineChart />
                      Progress
                    </Flex>
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="comments"
                    _selected={{ bg: 'pink.500', color: 'white' }}
                  >
                    <Flex align="center" gap={2}>
                      <LuMessageSquare />
                      Comments
                    </Flex>
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="demo" p={6}>
                  <Box
                    as="video"
                    controls
                    width="100%"
                    height="auto"
                    borderRadius="lg"
                    mb={4}
                    poster={imageSrc}
                  >
                    <source src={demoVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="progress" p={6}>
                  <Flex direction="column" gap={4}>
                    {progressList.map((progress, idx) => (
                      <Box 
                        key={idx}
                        p={4}
                        bg="whiteAlpha.100"
                        borderRadius="lg"
                      >
                        <Text color="pink.400" fontSize="sm" mb={2}>
                          {progress.date}
                        </Text>
                        <Text color="whiteAlpha.900">
                          {progress.content}
                        </Text>
                      </Box>
                    ))}
                  </Flex>
                </Tabs.Content>

                <Tabs.Content value="comments" p={6}>
                  <Flex direction="column" gap={4}>
                    {commentsList.map((comment, idx) => (
                      <Box 
                        key={idx}
                        p={4}
                        bg="whiteAlpha.100"
                        borderRadius="lg"
                      >
                        <Text color="pink.400" fontSize="sm" mb={2}>
                          {comment.user}
                        </Text>
                        <Text color="whiteAlpha.900">
                          {comment.content}
                        </Text>
                      </Box>
                    ))}
                  </Flex>
                </Tabs.Content>
              </Tabs.Root>
            </Box>
          </Flex>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
});

ProjectCardNew.displayName = 'ProjectCardNew';

export default ProjectCardNew; 