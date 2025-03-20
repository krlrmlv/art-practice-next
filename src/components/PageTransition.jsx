"use client";

import { motion } from "motion/react";

const transitionVariants = {
  initial: { opacity: 0, scale: 0 },
  exit: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={transitionVariants}
    >
      {children}
    </motion.div>
  );
}
