import {Image, Center, Box } from "@chakra-ui/react";
import MainNavBar from "@/components/components/mainNavbar";
import DevilFundInfo from "@/components/components/DevilFundInfo";
import ProjectModuleInfo from "@/components/components/ProjectModule-Info";
import projects from "@/data/projects";
import FixedNavBar from "@/components/FixedNavBar";
import ProjectShowcase from "@/components/components/ProjectShowcase";

function Home() {
  return (
    <>
      {/* 内容容器 */}
      <Box position="relative">
        {/* 第一个区块 - transball背景 */}
        <Box
          minHeight="100vh"
          width="100%"
          position="relative"
          overflow="hidden"
          height="fit-content"
        >
          {/* transball背景 */}
          <Box
            position="absolute"
            top={0}
            left="50%"
            transform="translateX(-50%)"
            width="100%"
            height="100%"
            justifyContent="center"
            bgImage="url('/images/transballs.svg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            opacity={0.2}
            zIndex={-1}
            maxW="70vw"
            overflow="hidden"
            filter="blur(5px)"
            sx={{
              WebkitFilter: "blur(100px)",
              backdropFilter: "blur(100px)"
            }}
          />
          {/* 第一区块内容：介绍Devil Fund 内容*/}
          <Box
            pt={{ 
              base: "20px", 
              md: "70px" 
            }}
            position="relative"
            zIndex={1}
          >
            <FixedNavBar />
            <DevilFundInfo/>
            <ProjectModuleInfo projects={projects} />
          </Box>
        </Box>

        {/* 第二个区块 - 项目展示区，2x2的项目展示格子 */}
        <Box
          id="first-section"
          position="relative"
          height="fit-content"
          overflow="hidden"
        >
          <ProjectShowcase />
        </Box>

        {/* 第三个区块 - 白色区域 Meet Devil Fund Founder*/}
        <Box
          id="second-section"
          minHeight="100vh"
          width="100%"
          bg="gray.900"
          position="relative"
        >
          {/* 白色区域的内容 */}
        </Box>

        {/* 可以添加第三个区块 */}
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
