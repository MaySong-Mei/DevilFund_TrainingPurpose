import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const AnimatedBackground_random = ({ imagePositions }) => {
  const [particles, setParticles] = useState([]);
  const timerRef = useRef(null);
  const isVisibleRef = useRef(true);

  const ANIMATION_DURATION = 3;
  const SPAWN_DELAY = ANIMATION_DURATION / 5;
  const MARGIN = 10;
  const FADE_IN_DURATION = 0.4;
  const COLOR_DURATION = 1;

  // 生成随机边缘位置的函数
  const getRandomEdgePosition = () => {
    const edge = Math.floor(Math.random() * 4); // 0-3 分别代表上、右、下、左四条边
    let x, y;

    switch (edge) {
      case 0: // 上边
        x = Math.random() * window.innerWidth;
        y = MARGIN;
        break;
      case 1: // 右边
        x = window.innerWidth - MARGIN;
        y = Math.random() * window.innerHeight;
        break;
      case 2: // 下边
        x = Math.random() * window.innerWidth;
        y = window.innerHeight - MARGIN;
        break;
      case 3: // 左边
        x = MARGIN;
        y = Math.random() * window.innerHeight;
        break;
    }

    return { x, y };
  };

  const createParticles = () => {
    // 每次生成10个随机粒子
    const particleCount = Math.floor(Math.random() * 10) + 10;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const position = getRandomEdgePosition();
      particles.push({
        id: Date.now() + Math.random(),
        startX: position.x,
        startY: position.y,
        size: Math.random() * 10 + 15, // 随机大小 15-25px
        duration: ANIMATION_DURATION,
        colorDuration: COLOR_DURATION
      });
    }

    return particles;
  };

  // 添加页面可见性变化处理函数
  const handleVisibilityChange = () => {
    isVisibleRef.current = !document.hidden;
    
    if (document.hidden) {
      // 页面隐藏时清除定时器和粒子
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setParticles([]); // 清除所有粒子
    } else {
      // 页面可见时重新开始生成粒子
      generateNewWave();
    }
  };

  const generateNewWave = () => {
    // 只在页面可见时生成新的粒子
    if (!isVisibleRef.current) return;

    const newParticles = createParticles();
    setParticles(prev => [...prev, ...newParticles]);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      generateNewWave();
    }, SPAWN_DELAY * 1000);
  };

  useEffect(() => {
    // 添加页面可见性变化监听
    document.addEventListener('visibilitychange', handleVisibilityChange);
    generateNewWave();
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      // 清除监听器
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      overflow="hidden"
      pointerEvents="none"
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.startX,
              y: particle.startY,
              opacity: 0,
              scale: 1,
              backgroundColor: "rgba(128, 128, 128, 0.9)"
            }}
            animate={{
              opacity: 0.9,
              x: window.innerWidth / 2,
              y: window.innerHeight / 2,
              scale: 0,
              backgroundColor: "rgba(52, 211, 153, 0.9)"
            }}
            transition={{
              opacity: {
                duration: FADE_IN_DURATION,
                ease: "easeOut"
              },
              backgroundColor: {
                duration: particle.colorDuration,
                ease: "easeOut"
              },
              scale: {
                duration: particle.duration,
                ease: "easeInOut"
              },
              x: {
                duration: particle.duration,
                ease: "linear"
              },
              y: {
                duration: particle.duration,
                ease: "linear"
              }
            }}
            onAnimationComplete={() => {
              setParticles(prev => prev.filter(p => p.id !== particle.id));
            }}
            style={{
              position: "absolute",
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: "50%",
              boxShadow: `0 0 ${particle.size/2}px rgba(52, 211, 153, 0.3)`,
            }}
          />
        ))}
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedBackground_random; 