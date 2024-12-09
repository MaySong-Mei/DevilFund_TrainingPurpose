import { Box, Flex } from "@chakra-ui/react";
import ProjectShowcaseContent from './ProjectShowcaseContent';
import ProjectShowcaseHeader from './ProjectShowcaseHeader';
import showcaseProjects from '@/data/showcaseProjects';

function ProjectShowcase() {
  // 创建两组不同的项目数据
  const firstShowcase = {
    left: {
      ...showcaseProjects.left,
      videoUrl: "/videos/showcase/AE_video.mov"
    },
    right: {
      ...showcaseProjects.right,
      videoUrl: "/videos/showcase/AE_video.mov"
    }
  };

  const secondShowcase = {
    left: {
      ...showcaseProjects.left,
      videoUrl: "/videos/showcase/other-video.mp4"
    },
    right: {
      ...showcaseProjects.right,
      videoUrl: "/videos/showcase/another-video.mp4"
    }
  };
  // 之后会修改成从分别两个showcaseProjects.js中获取数据

  return (
    <Box minHeight="100vh" width="100%" bg="white" position="relative" py={10}>
      <Flex
        maxWidth="98%"
        mx="auto"
        direction="column"
        align="left"
        px={4}
      >
        <ProjectShowcaseHeader />
        <ProjectShowcaseContent projects={firstShowcase} />
        <ProjectShowcaseContent projects={secondShowcase} />
      </Flex>
    </Box>
  );
}

export default ProjectShowcase;