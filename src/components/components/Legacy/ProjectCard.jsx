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

const ProjectCard = memo(({ title, imageSrc }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DialogRoot size="lg" isOpen={isOpen} onClose={onClose}>
      {/* 卡片触发器部分 - 使用原来的Box效果 */}
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

      {/* Dialog Content */}
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
            {/* 左侧信息区域 */}
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
                这是一个关于情感计算的项目，致力于探索人工智能在情感识别和表达方面的应用。
              </Text>
              
              <Text fontSize="lg" fontWeight="bold" mb={4} color="pink.400">
                Tech Stack
              </Text>
              <Flex wrap="wrap" gap={2} mb={6}>
                {['Python', 'TensorFlow', 'React', 'Node.js'].map((tech) => (
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

            {/* 右侧标签页区域 */}
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

                {/* Tab panels 内容保持不变... */}
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
                    <source src="/path/to/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="progress" p={6}>
                  <Flex direction="column" gap={4}>
                    {[
                      { date: '2024-03-15', content: '完成了情感识别模型的初步训练' },
                      { date: '2024-03-10', content: '数据集收集完成' },
                      { date: '2024-03-05', content: '项目启动会议' }
                    ].map((progress, idx) => (
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
                    {[
                      { user: 'User1', content: '非常有创意的项目！' },
                      { user: 'User2', content: '期待看到更多进展' }
                    ].map((comment, idx) => (
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

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
