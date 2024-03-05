import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Projects = ({ name, img, desc }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  return (
    <section>
      <div className="project-container">
        <div ref={ref} className="img-container">
          <img src={img} alt="" />
        </div>
        <motion.div style={{ y }} className="desc-container">
          <h2>{name}</h2>
          <p>{desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
