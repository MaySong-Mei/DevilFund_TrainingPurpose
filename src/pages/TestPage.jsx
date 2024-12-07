import { Box } from "@chakra-ui/react";
import HeroSection from "@/components/components/HeroSection";
import ProjectModuleInfo from "@/components/components/ProjectModule-Info";
import projects from "@/data/projects";
import FixedNavBar from "@/components/FixedNavBar";
import ProjectShowcaseModulized from "@/components/components/ProjectShowcase-Modulized";

function Home() {
  return (
    <>
      <Box position="relative">
        {/* Hero Section */}
        <FixedNavBar />
        <HeroSection />

        {/* 第一个区块 - 白色区域 项目展示区，2x2的项目展示格子 */}
        <Box
          id="first-section"
          position="relative"
          height="fit-content"
          overflow="hidden"
        >
          <ProjectShowcaseModulized />
        </Box>

        {/* 第二个区块 - AI项目*/}
        <Box
          id="second-section"
          minHeight="100vh"
          width="100%"
          bg="gray.900"
          position="relative"
        >
          {/* 白色区域的内容 */}
        </Box>

        {/* 第三个区块 */}
        <Box
          id="third-section"
          minHeight="100vh"
          width="100%"
          bg="gray.800"
          position="relative"
        >
        </Box>
      </Box>
    </>
  );
}

export default Home;
