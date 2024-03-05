import "./education.scss";
import { motion } from "framer-motion";

const variant = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  final: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 50,
      delayChildren: 0.2,
      staggerChildren: 0.5,
    },
  },
};

const Education = () => {
  return (
    <div className="education">
      <motion.div
        variants={variant}
        initial="initial"
        whileInView="final"
        className="container"
      >
        <motion.div variants={variant} className="heading">
          <h1>Education</h1>
          <p>
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.{" "}
          </p>
        </motion.div>
        <div className="education-card-container">
          <motion.div variants={variant} className="card">
            <div className="card-info-heading">
              <div className="logo">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-32343.appspot.com/o/bvp-logo.webp?alt=media&token=f417ad79-1de3-4c66-a061-d46abc6fcb26"
                  alt=""
                />
              </div>
              <div className="name">
                <div className="college-name">
                  <h3>Bharati Vidyapeeth's College of Engineering</h3>
                  <h5>
                    Bachelor of Technology - BTech, Electronics and
                    Communication Engineering
                  </h5>
                </div>
                <p>Aug 2020 - Jul 2024</p>
              </div>
            </div>
            <div className="result">
              <h5>Grade: 8.81 CGPA</h5>
            </div>
            <div className="desc">
              <p>
                I am currently pursuing a Bachelor's degree in Electronics and
                Communication Engineering at Bharati Vidyapeeth's College of
                Engineering, New Delhi. I have completed 7 semesters and have a
                CGPA of 8.81. I have taken courses in Data Structures,
                Algorithms, Object-Oriented Programming, Database Management
                Systems, Operating Systems, and Computer Networks, among others.
              </p>
            </div>
          </motion.div>
          <motion.div variants={variant} className="card">
            <div className="card-info-heading">
              <div className="logo">
                <img
                  src="https://gn.cambridgeschool.edu.in/wp-content/uploads/sites/5/2023/03/logo-1.png"
                  alt=""
                />
              </div>
              <div className="name">
                <div className="college-name">
                  <h3>Cambridge School Greater Noida</h3>
                  <h5>CBSE(XII), Science with Informatic Practics</h5>
                </div>
                <p>Apr 2018 - Apr 2019</p>
              </div>
            </div>
            <div className="result">
              <h5>Grade: 88.1%</h5>
            </div>
            <div className="desc">
              <p>
                I completed my class 12 high school education at Cambridge
                School Greater Noida ,Uttar Pradesh, where I studied Science
                with Information Practics .<br />
                Subject : Physics, Chemistry, Maths, English, Java Netbeans,
                MySQL.
              </p>
            </div>
          </motion.div>
          <motion.div variants={variant} className="card">
            <div className="card-info-heading">
              <div className="logo">
                <img
                  src="https://gn.cambridgeschool.edu.in/wp-content/uploads/sites/5/2023/03/logo-1.png"
                  alt=""
                />
              </div>
              <div className="name">
                <div className="college-name">
                  <h3>Cambridge School Greater Noida</h3>
                  <h5>CBSE(X)</h5>
                </div>
                <p>Apr 2016 - Apr 2017</p>
              </div>
            </div>
            <div className="result">
              <h5>Grade: 9.4 CGPA</h5>
            </div>
            <div className="desc">
              <p>
                I completed my class 10 education at CAMBRIDGE SCHOOL, Greater
                Noida, Uttar Pradesh.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
