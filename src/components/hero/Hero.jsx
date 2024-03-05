import "./Hero.scss";
import { motion } from "framer-motion";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 0.1,
    },
  },
  scrollImg: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const scrollVariant = {
  initial: {
    x: 0,
  },
  scrollText: {
    x: "-1180%",
    transition: {
      duration: 80,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="textContainer" initial="initial" animate="animate">
        <motion.div className="wrapper" variants={textVariant}>
          <motion.h2 variants={textVariant}>SHIVANSH CHAUHAN</motion.h2>
          <motion.h1 variants={textVariant}>
            {" "}
            Web Developer and UI designer
          </motion.h1>
          <motion.div variants={textVariant} className="buttons">
            <motion.button variants={textVariant}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariant}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariant}
            animate="scrollImg"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="slidingText"
        variants={scrollVariant}
        initial="initial"
        animate="scrollText"
      >
        React NodeJS MongoDB Redux TailwindCSS Framer ExpressJS
      </motion.div>
      <div className="imageContainer">
        <img src="/ShivanshChauhan.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
