import React, { useState } from "react";
import "./SideBar.scss";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(100%)",
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
  closed: {
    clipPath: "circle(9% at 30px 30px)",
    borderRadius: "50%",
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
};

const optionVariant = {
  open: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const item = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="sidebar-subContainer" variants={variants}>
          <button onClick={() => setOpen(!open)}>
            {!open ? (
              <i class="fa-solid fa-bars"></i>
            ) : (
              <i class="fa-solid fa-xmark"></i>
            )}
          </button>
          <motion.div className="links" variants={optionVariant}>
            <motion.a
              href="#homepage"
              whileHover={{ scale: 1.2 }}
              variants={item}
            >
              Homepage
            </motion.a>
            <motion.a
              href="#service"
              whileHover={{ scale: 1.2 }}
              variants={item}
            >
              Services
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.2 }}
              variants={item}
            >
              Portfolio
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.2 }}
              variants={item}
            >
              Contact
            </motion.a>
            <motion.a href="#about" whileHover={{ scale: 1.2 }} variants={item}>
              About
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sidebar;
