import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });
  const scrollItem = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={parallaxRef}
      className="parallax"
      style={{
        background:
          type === "service"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#0c0c1d,#111132)",
      }}
    >
      <motion.h1 style={{ y: scrollItem, x: "-220px" }}>
        {type === "service" ? "What I Do ?" : "What I Did ?"}
      </motion.h1>
      <motion.div style={{ y: scrollItem }} className="mountains"></motion.div>
      <motion.div style={{ x: scrollItem }} className="stars"></motion.div>
      <motion.div
        style={{ y: scrollItem }}
        className={type === "service" ? "planets" : "sun"}
      ></motion.div>
    </div>
  );
};

export default Parallax;
