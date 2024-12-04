import { Box, Flex, Button, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

function FixedNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 页面导航项
  const pageNavItems = [
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Jobs", path: "/jobs" },
    { title: "Transactions", path: "/transactions" }
  ];

  // 位置导航项
  const sectionNavItems = [
    { title: "Platform_Solutions", id: "first-section" },
    { title: "Artificial_Intelligence", id: "second-section" },
    { title: "Physical_Products", id: "third-section" }
  ];
  
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);
  const [isPositionNav, setIsPositionNav] = useState(false);

  // 处理Logo点击
  const handleLogoClick = () => {
    if (isPositionNav || showPillNav) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsPositionNav(false);
    } else {
      navigate('/');
    }
  };

  // 滚动到指定section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsNavigating(true);
      setIsPositionNav(true);
      
      const navHeight = 80;
      const offset = element.offsetTop - navHeight;
      
      window.scrollTo({ 
        top: offset, 
        behavior: 'smooth' 
      });

      // 滚动结束后只重置导航状态，保持位置导航模式
      const scrollTimeout = setTimeout(() => {
        setIsNavigating(false);
      }, 1000);

      return () => clearTimeout(scrollTimeout);
    }
  };

  // 修改状态检测逻辑
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const firstSectionElement = document.getElementById('first-section');
      
      // 检查是否在第一页内
      // 在这里修改偏移量 300 以调整进入位置导航模式的位置
      const isInFirstSection = firstSectionElement ? 
        currentScrollY < (firstSectionElement.offsetTop - 300) : false;
      
      // 设置是否在顶部
      setIsAtTop(currentScrollY === 0);
      
      // 设置导航模式
      if (isInFirstSection) {
        setIsPositionNav(false); // 在第一页内使用页面导航
      } else {
        setIsPositionNav(true);  // 离开第一页后使用位置导航
      }

      // 检测当前活跃section（仅在位置导航模式下需要）
      if (!isInFirstSection) {
        sectionNavItems.forEach(({ id }) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const navHeight = 80;
            if (rect.top <= navHeight + 50 && rect.bottom >= navHeight) {
              setActiveSection(id);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionNavItems]); // 只依赖 sectionNavItems

  // 简化导航栏样式逻辑
  const navStyles = isPositionNav ? 
    {
      // 位置导航模式 - 完全透明背景
      backgroundColor: "transparent",
      backdropFilter: "none",
      height: "6vh",
      transition: "all 0.3s ease"
    } : 
    (isAtTop ? {
      // 页面导航模式且在顶部 - 完全透明
      backgroundColor: "transparent",
      backdropFilter: "none",
      height: "6vh",
      transition: "all 0.3s ease"
    } : {
      // 页面导航模式且不在顶部 - 毛玻璃效果
      backdropFilter: "blur(15px)",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      height: "6vh",
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease"
    });

  // 简化 showPillNav 逻辑
  const showPillNav = isPositionNav;

  // Add media query for portrait mode
  const portraitNavStyles = {
    '@media (orientation: portrait)': {
      height: '4vh', // Adjust this value as needed
    }
  };

  // Apply 按钮的统一样式
  const applyButtonStyles = {
    colorScheme: "black",
    variant: "solid",
    borderRadius: "full", // 胶囊形状
    transition: "all 0.2s ease",
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "lg",
    }
  };

  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      justifyContent="space-between"
      alignItems="center"
      padding="0 2rem"
      zIndex={1000}
      mb={10}
      // border="5px solid red"
      {...navStyles}
      {...portraitNavStyles} // Apply portrait styles
    >
      {/* Logo区域 */}
      <Box width={{ base: "80px", md: "80px" }}>
        <Box
          cursor="pointer"
          onClick={handleLogoClick}
          bg={showPillNav ? "rgba(0, 0, 0, 0.75)" : "transparent"}
          borderRadius="full"
          boxShadow={showPillNav ? "0px 4px 12px rgba(0, 0, 0, 0.15)" : "none"}
          p={showPillNav ? 1 : 0}
          transition="all 0.3s ease"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/images/DevilFund-logo(light).svg"
            alt="Logo"
            h={showPillNav ? "30px" : "40px"}
            transition="height 0.3s ease"
            position="relative"
            right={0.5}
          />
        </Box>
      </Box>

      {/* 导航菜单容器 - 只在桌面显示 */}
      <Box
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        zIndex={1}
        display={{ base: "none", md: "block" }}
        width="100%"
        maxWidth="600px"
      >
        <Box 
          position="relative"
          width="100%"
          height="40px"
        >
          {/* 胶囊式导航菜单 */}
          <Flex
            display={{ base: "none", md: "flex" }}
            bg="rgba(0, 0, 0, 0.75)"
            borderRadius="full"
            p={2}
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
            position="absolute"
            left="50%"
            top="0"
            h="40px"
            transform={`translate(-50%, 0) scale(${showPillNav ? 1 : 0.8})`}
            opacity={showPillNav ? 1 : 0}
            transition="all 0.3s ease"
            visibility={showPillNav ? "visible" : "hidden"}
          >
            {sectionNavItems.map(({ title, id }) => (
              <Box
                key={id}
                color="white"
                px={4}
                py={2}
                display="flex"
                alignItems="center"
                cursor="pointer"
                borderRadius="full"
                bg={activeSection === id ? "whiteAlpha.200" : "transparent"}
                _hover={{
                  bg: "whiteAlpha.300",
                }}
                onClick={() => scrollToSection(id)}
                fontSize="14px"
                fontWeight="medium"
                transition="all 0.2s ease"
              >
                {title}
              </Box>
            ))}
          </Flex>

          {/* 普通导航菜单 */}
          <Flex
            // border="1px solid blue"
            display={{ base: "none", md: "flex" }}
            gap="10px"
            position="absolute"
            left="50%"
            top="0"
            transform={`translate(-50%, 0) scale(${showPillNav ? 0.8 : 1})`}
            opacity={showPillNav ? 0 : 1}
            transition="all 0.3s ease"
            visibility={showPillNav ? "hidden" : "visible"}
          >
            {pageNavItems.map(({ title, path }) => (
              <Box
                key={path}
                color="white"
                px={5}
                py={1}
                cursor="pointer"
                _hover={{ color: "gray.200" }}
                onClick={() => navigate(path)}
                fontSize="20px"
                transition="all 0.2s ease"
              >
                {title}
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>

      {/* Desktop Apply Button */}
      <Box 
        // width="200px" 
        // border="1px solid red"
        display={{ base: "none", md: "flex" }} 
        justifyContent="flex-end"
      >
        <Button
          {...applyButtonStyles}
          size={showPillNav ? "sm" : "md"}
          fontSize={showPillNav ? "12px" : "16px"}
          px={6}
          py={showPillNav ? 2 : 3}
          bg={showPillNav ? "rgba(0, 0, 0, 0.75)" : "transparent"}
          color={showPillNav ? "white" : "white"}
          boxShadow={showPillNav ? "0px 4px 12px rgba(0, 0, 0, 0.15)" : "none"}
          _hover={{
            transform: "translateY(-1px)",
            boxShadow: "md",
            bg: showPillNav ? "rgba(0, 0, 0, 0.85)" : "rgba(100, 0, 0, 0.85)"
          }}
        >
          Apply
        </Button>
      </Box>

      {/* Mobile Menu - 使用新的菜单组件 */}
      <MenuRoot>
        <MenuTrigger asChild>
          <Box
            display={{ base: "flex", md: "none" }}
            cursor="pointer"
            p={4}
            ml="auto"
            alignItems="center"
            justifyContent="center"
            role="button"
            aria-label="Open menu"
          >
            <HamburgerIcon 
              color="white" 
              boxSize={14}
              transition="all 0.3s ease"
            />
          </Box>
        </MenuTrigger>

        <MenuContent>
          {/* 位置导航项 */}
          {sectionNavItems.map(({ title, id }) => (
            <MenuItem
              key={id}
              onClick={() => {
                scrollToSection(id);
                setIsMenuOpen(false);
              }}
              _hover={{ bg: "whiteAlpha.200" }}
              bg="transparent"
              color="white"
              fontSize="24px"
              py={5}
            >
              {title}
            </MenuItem>
          ))}
          
          {/* 分隔线 */}
          <Box 
            height="2px" 
            bg="whiteAlpha.300" 
            my={4}
          />

          {/* Apply 按钮 */}
          <Box py={4} px={4}>
            <Button
              {...applyButtonStyles}
              size="lg"
              width="100%"
              borderRadius="md"
              fontSize="24px"
              py={8}
              onClick={() => {
                setIsMenuOpen(false);
              }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              transition="all 0.2s ease"
            >
              Apply
            </Button>
          </Box>
        </MenuContent>
      </MenuRoot>
    </Flex>
  );
}

export default FixedNavBar; 