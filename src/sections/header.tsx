import { motion } from "motion/react";

import DesktopNavbar from "@/components/navbar/desktop-navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = window.location.pathname;
  const isHome = pathname === "/";

  return isHome ? (
    <MotionHeader className="bg-popover md:bg-transparent">
      <HeaderChildren />
    </MotionHeader>
  ) : (
    <NormalHeader className="bg-background">
      <HeaderChildren />
    </NormalHeader>
  );
}

function HeaderChildren() {
  return (
    <div className="wrapper flex items-center justify-between py-6">
      <h1 className="text-xl font-semibold hover:text-primary duration-200">
        <a href="#">Portfolio</a>
      </h1>

      <DesktopNavbar />

      <MobileNavbar />
    </div>
  );
}

function NormalHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <header className={cn(className)}>{children}</header>;
}

const headerVars = {
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
};

function MotionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.header
      variants={headerVars}
      initial={"initial"}
      animate={"animate"}
      className={cn(className)}
    >
      {children}
    </motion.header>
  );
}
