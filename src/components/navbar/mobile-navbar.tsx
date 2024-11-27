"use client";

import { AnimatePresence, motion, MotionConfig, useCycle } from "motion/react";

import { navLinks } from "@/lib/constants";

const navVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ulVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const navItemVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

export default function MobileNavbar() {
  const [menu, toggleMenu] = useCycle(false, true);

  // disable scrolling when menu is open
  // useEffect(() => {
  //     document.body.style.overflow = menu ? "hidden" : "";
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [menu]);

  return (
    <div className="md:hidden">
      <MenuButton menu={menu} toggleMenu={toggleMenu} />

      <AnimatePresence>
        {menu && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0,
            }}
          >
            <motion.nav
              variants={navVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="z-40 bg-popover fixed h-fit top-[76px] origin-top left-0 w-full md:hidden"
            >
              <motion.ul
                variants={ulVars}
                initial="initial"
                animate="animate"
                exit="initial"
                className="flex flex-col text-3xl gap-10 wrapper pt-8 pb-16 md:hidden"
              >
                {navLinks.slice(0, -2).map((link) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.div variants={navItemVars}>
                      <a
                        href={link.href}
                        className="hover:text-primary duration-200"
                      >
                        {link.text}
                      </a>
                    </motion.div>
                  </li>
                ))}
                <li className="flex gap-8 overflow-hidden">
                  {navLinks.slice(-2).map((link) => (
                    <motion.div key={link.href} variants={navItemVars}>
                      <a
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                        className="hover:text-primary duration-200"
                      >
                        {link.icon && <link.icon className="size-8" />}
                      </a>
                    </motion.div>
                  ))}
                </li>
              </motion.ul>
            </motion.nav>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuButton({
  menu,
  toggleMenu,
}: {
  menu: boolean;
  toggleMenu: () => void;
}) {
  return (
    <motion.button
      aria-label="Menu icon"
      animate={menu ? "open" : "close"}
      className="z-50 flex flex-col gap-y-1 px-1 py-1.5 lg:hidden"
      onClick={() => toggleMenu()}
    >
      <motion.span
        variants={{
          open: {
            rotate: 45,
            y: 6,
          },
          close: {
            rotate: 0,
            y: 0,
          },
        }}
        className="h-0.5 w-5 bg-foreground"
      ></motion.span>
      <motion.span
        variants={{
          open: {
            rotate: 45,
            opacity: 0,
          },
          close: {
            rotate: 0,
            opacity: 1,
          },
        }}
        className="h-0.5 w-5 bg-foreground"
      ></motion.span>
      <motion.span
        variants={{
          open: {
            rotate: -45,
            y: -6,
          },
          close: {
            rotate: 0,
            y: 0,
          },
        }}
        className="h-0.5 w-5 bg-foreground"
      ></motion.span>
    </motion.button>
  );
}
