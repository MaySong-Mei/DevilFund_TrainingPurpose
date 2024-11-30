import { Flex, Button, Box } from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import ApplyModal from "./ApplyModal";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

export default function MainNavBar() {
  const navPage = ["About", "Projects", "Jobs", "Transactions"];
  const navigate = useNavigate();
  const navRoutes = ["/about", "/projects", "/jobs", "/tractions"];
  let userName = "? ? ? ?";

  return (
    <Flex
      backdropFilter="blur(15px)"
      backgroundColor="rgba(255, 255, 255, 0.15)"
      width="100%"
      height="8vh"
      justifyContent="space-between"
      alignItems="center"
      padding="0 2rem"
      boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)"
      borderBottom="1px solid rgba(255, 255, 255, 0.2)"
      zIndex="10"
    >
      {/* Desktop Navigation */}
      <Flex
        display={{ base: "none", md: "flex" }}
        gap="10px"
        marginLeft={"20vh"}
      >
        {navPage.map((page, idx) => (
          <Box
            key={page}
            as="div"
            role="button"
            tabIndex={0}
            color="white"
            backgroundColor="transparent"
            _hover={{ color: "gray.200" }}
            fontSize="20px"
            onClick={() => navigate(navRoutes[idx])}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                navigate(navRoutes[idx]);
              }
            }}
            px={4}
            py={2}
            cursor="pointer"
          >
            {page}
          </Box>
        ))}
      </Flex>

      {/* Mobile Navigation */}
      <MenuRoot>
        <MenuTrigger asChild>
          <Box
            as="div"
            role="button"
            display={{ base: "block", md: "none" }}
            cursor="pointer"
            p={2}
            backgroundColor="transparent"
            border="none"
            aria-label="Open menu"
          >
            <Bars3Icon width={24} height={24} color="white" />
          </Box>
        </MenuTrigger>
        <MenuContent>
          {navPage.map((page, idx) => (
            <MenuItem
              key={page}
              as="div"
              onClick={() => navigate(navRoutes[idx])}
            >
              {page}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>

      {/* User Section */}
      <Flex alignItems="center" gap="10px">
        <Box
          as="div"
          role="button"
          tabIndex={0}
          color="white"
          backgroundColor="transparent"
          _hover={{ color: "gray.200" }}
          fontSize="20px"
          px={4}
          py={2}
          cursor="pointer"
        >
          {userName}
        </Box>
        <Box
          width="1.5px"
          height="30px"
          backgroundColor="rgba(255, 255, 255, 0.5)"
        />
        <Box
          as="div"
          role="button"
          tabIndex={0}
          color="white"
          backgroundColor="transparent"
          _hover={{ color: "gray.200" }}
          fontSize="20px"
          px={4}
          py={2}
          cursor="pointer"
          onClick={() => {/* 处理登出逻辑 */}}
        >
          Logout
        </Box>
        <ApplyModal />
      </Flex>
    </Flex>
  );
}
