import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCardNew from "@/components/ProjectCard";

function ProjectModuleInfo({ projects }) {
  return (
    <>
      <Text
        display="flex"
        justifyContent="center"
        fontSize="lg"
        fontWeight="500"
        mt={10}
        mb={5}
        maxWidth="1370px"
        mx="auto"
        letterSpacing="0.1em"
        fontFamily="'Inter', sans-serif"
        textTransform="uppercase"
        opacity="0.9"
        transition="text-shadow 0.2s"
        _hover={{
          textShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",
          transition: "all 0.2s ease-in-out",
        }}
      >
        On Going Projects
      </Text>
      <Button
        as="div"
        variant="unstyled"
        display="flex"
        justifyContent="center"
        maxWidth="1500px"
        mx="auto"
      >  
        <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} gap={3} zIndex={1}>
          {projects.map((project, index) => (
            <ProjectCardNew
              key={index}
              {...project}
            />
          ))}
        </SimpleGrid>
      </Button>
    </>
  );
}

export default ProjectModuleInfo;