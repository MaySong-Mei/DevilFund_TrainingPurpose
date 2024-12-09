import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from "framer-motion";

// 创建自定义motion组件
const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

const IntroAnimation = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("No");

  useEffect(() => {
    // 第一步：显示 "No"
    setTimeout(() => {
      // 第二步：逐字添加 "pitch"
      const fullText = "NoPitch";
      let currentIndex = 2; // 从 "No" 之后开始

      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          // 文字完成后等待
          setTimeout(() => {
            // 开始上移
            setStep(1);
            // 等待上移完全完成后
            setTimeout(() => {
              // 开始背景淡出
              setStep(2);
              // 淡出完成后移除组件
              setTimeout(() => {
                setIsVisible(false);
                onComplete?.();
              }, 800);
            }, 800); // 确保上移动画完全完成
          }, 300);
        }
      }, 35); // 每个字母的间隔时间

      return () => clearInterval(interval);
    }, 350);
  }, []);

  if (!isVisible) return null;

  return (
    <MotionBox
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="gray.700"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={100}
      animate={step === 2 ? { 
        opacity: 0,
      } : { 
        opacity: 1 
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}
    >
      <MotionBox
        position="relative"
        width="400px"
        textAlign="center"
        animate={step >= 1 ? { 
          y: -173,//位置移动
          opacity: 1
        } : { 
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <MotionText
          fontSize="6xl"
          fontWeight="bold"
          color="green.400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
          style={{
            textShadow: '0 0 10px rgba(52, 211, 153, 0.3)'
          }}
        >
          {text}
        </MotionText>
      </MotionBox>
    </MotionBox>
  );
};

export default IntroAnimation; 