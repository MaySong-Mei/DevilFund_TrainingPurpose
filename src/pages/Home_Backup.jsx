import MainNavBar from "@/components/components/mainNavbar";
import About from "./About";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <MainNavBar />
      <About></About>
      <Box marginTop={"10vh"} marginBottom={"5vh"}>
        <footer>footer...</footer>
      </Box>
    </>
  );
}
