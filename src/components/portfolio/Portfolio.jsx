import "./portfolio.scss";
import project from "../../utils/project";
import Projects from "./Projects";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 100], ["0%", "95%"]);
  const scale = useSpring(scaleY, { stiffness: 1000, damping: 10 });
  console.log(scale);
  return (
    <div ref={ref} className="portfolio">
      <div className="heading">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scale }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="scrollbar"
        ></motion.div>
      </div>

      {/* section are coming   */}
      {project.map((item, index) => (
        <Projects key={index} {...item} />
      ))}
    </div>
  );
};

export default Portfolio;
