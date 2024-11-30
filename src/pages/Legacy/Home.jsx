import MainNavBar from "@/components/components/mainNavbar";
import { Flex, Text, Stack, Box, Button, Image } from "@chakra-ui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import ProjectModal from "@/components/components/ProjectModal";
import NewProjectForm from "@/components/components/NewProjectForm";
import HeaderSection from "@/components/components/HeaderSection";
import { useState } from "react";


export default function Home() {

  const initProjects = [
    "matchPoint",
    "Artificial Emotion",
    "RawResume",
    "SeaSell",
    "Applyee",
    "Antoy",
  ];

  const [projects, updateProjects] = useState(initProjects);


  return (
    <>
      <MainNavBar />
      <Stack>
        <HeaderSection></HeaderSection>

        <Flex
          flexDir="column"
          width={{ base: "90%", md: "61vh" }}
          mx={{ base: "auto", md: "20vh" }}
          mt={{ base: "4vh", md: "8vh" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex gap="10px" justify={{ base: "center", md: "flex-start" }}>
            <Text textStyle="5xl" fontSize={{ base: "3xl", md: "5xl" }}>
              Why
            </Text>
            <Text
              textStyle="5xl"
              color="#950000"
              fontFamily="'Fira Sans Condensed', sans-serif"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              DEVIL FUND
            </Text>
          </Flex>
          <Text fontSize={{ base: "sm", md: "md" }} mt="4">
            Devil Fund supports startups/projects/experiments that successfully
            spot the vulnerability of modern products/services and act to destroy
            with new solutions, not patch, the old systems.
          </Text>

          <Box
            boxSize="5vh"
            mx={{ base: "auto", md: "25vh" }}
            mt="3vh"
            display={{ base: "none", md: "block" }}
          >
            <EllipsisHorizontalIcon />
          </Box>

          <Button
            fontSize="16px"
            backgroundColor="#497497"
            color="white"
            borderRadius="10vh"
            width={{ base: "50%", md: "20vh" }}
            height="5vh"
            _hover={{ opacity: 0.8 }}
            mx={{ base: "auto", md: "0" }}
            mt="4vh"
          >
            Apply to Devil
          </Button>

          <Flex
            gap={"5vh"}
            width={{ smbase: "90vh", md: "120vh" }}
            flexWrap={"wrap"}
            marginTop={"10vh"}
            justify={{ base: "center", md: "flex-start" }}
          >
            {projects.map((proj) => {
              return <ProjectModal project={proj}></ProjectModal>;
            })}
            <NewProjectForm></NewProjectForm>
          </Flex>
        </Flex>
      </Stack>
      <Box marginTop={"10vh"} marginBottom={"5vh"}>
        <footer>footer...</footer>
      </Box>
    </>
  );
}
