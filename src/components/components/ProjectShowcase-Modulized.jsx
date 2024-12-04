import { Box, Flex } from "@chakra-ui/react";
import ProjectShowcaseContent from './ProjectShowcaseContent';
import ProjectShowcaseHeader from './ProjectShowcaseHeader';
import showcaseProjects from '@/data/showcaseProjects';

function ProjectShowcase() {
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
        <ProjectShowcaseContent projects={showcaseProjects} />
        <ProjectShowcaseContent projects={showcaseProjects} />
      </Flex>
    </Box>
  );
}

export default ProjectShowcase;