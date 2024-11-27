import { motion } from "motion/react";

import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

export default function Header() {
  return (
    <motion.header
      variants={{
        initial: {
          opacity: 0,
          y: -77,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.3,
            duration: 0.6,
          },
        },
      }}
      initial={"initial"}
      animate={"animate"}
      className="bg-popover"
    >
      <div className="wrapper flex items-center justify-between py-6">
        <h1 className="text-xl font-semibold hover:text-primary duration-200">
          <a href="#">Portfolio</a>
        </h1>

        <DesktopNavbar />

        <MobileNavbar />
      </div>
    </motion.header>
  );
}
