import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const AnimatedBackground = ({ imagePositions }) => {
  const [particles, setParticles] = useState([]);
  const timerRef = useRef(null);
  const positionsRef = useRef(null);

  const ANIMATION_DURATION = 4;
  const SPAWN_DELAY = ANIMATION_DURATION / 5;
  const MARGIN = 30;
  const FADE_IN_DURATION = 0.4;
  const COLOR_DURATION = 1;

  useEffect(() => {
    positionsRef.current = imagePositions ? imagePositions : [
      { x: window.innerWidth * 0.25, y: MARGIN },
      { x: window.innerWidth * 0.75, y: MARGIN },
      { x: window.innerWidth - MARGIN, y: window.innerHeight * 0.25 },
      { x: window.innerWidth - MARGIN, y: window.innerHeight * 0.75 },
      { x: window.innerWidth * 0.75, y: window.innerHeight - MARGIN },
      { x: window.innerWidth * 0.25, y: window.innerHeight - MARGIN },
      { x: MARGIN, y: window.innerHeight * 0.75 },
      { x: MARGIN, y: window.innerHeight * 0.25 }
    ];
  }, [imagePositions]);

  const createParticles = () => {
    const positions = positionsRef.current;
    return positions.map((position, index) => ({
      id: Date.now() + Math.random(),
      startX: position.x,
      startY: position.y,
      size: 20,
      duration: ANIMATION_DURATION,
      colorDuration: COLOR_DURATION,
      positionIndex: index
    }));
  };

  const generateNewWave = () => {
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
    generateNewWave();

    const handleResize = () => {
      positionsRef.current = [
        { x: window.innerWidth * 0.25, y: MARGIN },
        { x: window.innerWidth * 0.75, y: MARGIN },
        { x: window.innerWidth - MARGIN, y: window.innerHeight * 0.25 },
        { x: window.innerWidth - MARGIN, y: window.innerHeight * 0.75 },
        { x: window.innerWidth * 0.75, y: window.innerHeight - MARGIN },
        { x: window.innerWidth * 0.25, y: window.innerHeight - MARGIN },
        { x: MARGIN, y: window.innerHeight * 0.75 },
        { x: MARGIN, y: window.innerHeight * 0.25 }
      ];
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener('resize', handleResize);
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

export default AnimatedBackground;
