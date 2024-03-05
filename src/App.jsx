import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/parallax";
import Skill from "./components/skills/Skill";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";

const App = () => {
  return (
    <div>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type={"service"} />
      </section>
      <section
        id="service"
        style={{
          padding: "0 15%",
          height: "180vh",
          background: "linear-gradient(180deg,#0c0c1d,#1c1c27)",
        }}
      >
        <Skill />
      </section>
      <section>
        <Parallax type={"portfolio"} />
      </section>
      <Portfolio />
      <section id="education" style={{ marginTop: "5px", height: "180vh" }}>
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer>
        <div className="container">
          <h4>Shivansh Chauhan</h4>
          <div className="menu">
            <h5>About</h5>
            <h5>Skills</h5>
            <h5>Projects</h5>
            <h5>Education</h5>
          </div>
          <div className="logo">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <p>2024 Shivansh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
