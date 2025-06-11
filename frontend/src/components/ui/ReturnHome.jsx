import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReturnHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-red-500 hover:bg-red-600 
            text-white rounded-full shadow-lg cursor-pointer z-50
            transition-colors duration-300"
          whileHover={{
            y: [-2, 2, -2],
            transition: {
              y: {
                repeat: Infinity,
                duration: 0.5,
                ease: "easeInOut"
              }
            }
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ReturnHome;