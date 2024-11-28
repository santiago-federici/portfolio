import { motion } from "motion/react";
import "@/styles/circle.css";

const circleVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: [0, 4, 4.3, 9],
    transition: {
      duration: 1.5,
    },
  },
};

export default function IntroCircle() {
  return (
    <div className="absolute inset-0 bg-foreground z-[-1]">
      <motion.div
        className="intro-circle"
        variants={circleVariants}
        initial={"initial"}
        animate={"animate"}
      />
    </div>
  );
}
