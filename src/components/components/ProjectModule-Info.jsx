import { Box, SimpleGrid, Text} from "@chakra-ui/react";
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
        mb={2}
        maxWidth="1370px"
        mx="auto"
        letterSpacing="0.1em"
        fontFamily="'Inter', sans-serif"
        textTransform="uppercase"
        opacity="0.9"
        // border="1px solid white"
        _hover={{
          transition: "all 0.2s ease-in-out",
        }}
      >
        On Going Projects
      </Text>
      <Box  
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
      </Box>
    </>
  );
}

export default ProjectModuleInfo;