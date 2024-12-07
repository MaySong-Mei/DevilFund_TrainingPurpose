import { useState, useEffect } from 'react';

export function useScrollSnap({ 
  sections, 
  threshold = 100,  // 吸附阈值
  offset = 80,      // 导航栏高度偏移
  isEnabled = true  // 是否启用吸附
}) {
  const [isSnapping, setIsSnapping] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // 滚动到指定section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsSnapping(true);
      
      const targetOffset = element.offsetTop - offset;
      window.scrollTo({ 
        top: targetOffset, 
        behavior: 'smooth' 
      });

      // 延迟重置状态
      const scrollTimeout = setTimeout(() => {
        setIsSnapping(false);
      }, 1000);

      return () => clearTimeout(scrollTimeout);
    }
  };

  useEffect(() => {
    if (!isEnabled) return;

    const handleScroll = () => {
      if (isSnapping) return;

      const currentScrollY = window.scrollY;
      let closestSection = null;
      let minDistance = Infinity;

      // 找到最近的section
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop - offset;
          const distance = Math.abs(currentScrollY - elementTop);
          
          if (distance < minDistance && distance < threshold) {
            minDistance = distance;
            closestSection = sectionId;
          }

          // 更新当前活跃section
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset + 50 && rect.bottom >= offset) {
            setActiveSection(sectionId);
          }
        }
      });

      // 执行吸附
      if (closestSection) {
        scrollToSection(closestSection);
      }
    };

    // 使用 throttle 优化滚动性能
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [sections, threshold, offset, isSnapping, isEnabled]);

  return {
    isSnapping,
    activeSection,
    scrollToSection
  };
} 