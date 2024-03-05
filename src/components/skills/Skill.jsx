import "./Skill.scss";
import CardItems from "./CardItems";
import { frontend, backend, langauge, others } from "../../utils/constant";
import { motion } from "framer-motion";

const variant = {
  initial: {
    x: "-500px",
    opacity: 0,
  },
  view: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 150,
    },
  },
};

const container = {
  initial: {
    x: -500,
    opacity: 0,
  },
  stagger: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 150,
      //   delayChildren: 5,
      //   staggerChildren: 2,
    },
  },
};

const Skill = () => {
  return (
    <div className="skill">
      <motion.header variants={variant} initial="initial" whileInView="view">
        <h1>Skills</h1>
        <h3>
          Here are some of my skills on which I have been working on for the
          past 2 years.{" "}
        </h3>
      </motion.header>
      <motion.div
        variants={container}
        initial="initial"
        whileInView="stagger"
        className="card-container"
      >
        <motion.div
          variants={variant}
          initial="initial"
          whileInView="view"
          className="card"
        >
          <h1>Frontend</h1>
          <div className="logo-container">
            {frontend.map((logo, index) => (
              <CardItems key={index} {...logo} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={variant}
          initial="initial"
          whileInView="view"
          className="card"
        >
          <h1>Backend</h1>
          <div className="logo-container">
            {backend.map((logo, index) => (
              <CardItems key={index} {...logo} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={variant}
          initial="initial"
          whileInView="view"
          className="card"
        >
          <h1>Langauge</h1>
          <div className="logo-container">
            {langauge.map((logo, index) => (
              <CardItems key={index} {...logo} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={variant}
          initial="initial"
          whileInView="view"
          className="card"
        >
          <h1>Other</h1>
          <div className="logo-container">
            {others.map((logo, index) => (
              <CardItems key={index} {...logo} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill;
