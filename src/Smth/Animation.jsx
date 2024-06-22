import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography } from '@material-tailwind/react';

const AnimatedTitle = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const lineVariants = {
    hidden: { width: 0, left: "50%" },
    visible: {
      left: 0,
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={ref} className="relative inline-block">
      <Typography variant="h1" className="text-4xl lg:text-5xl font-bold text-[#42446E] mb-4">
        <span className="relative">{children}</span>
      </Typography>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-pink-500"
        style={{ width: '100%' }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={lineVariants}
      />
    </div>
  );
};

export default AnimatedTitle;
