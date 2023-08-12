import "./Section3.css";
import carImg from "../../github-test.png";

const Section3 = () => {
  return (
    <div className="section-3__container">
      <div className="projects-container">
        <div className="car-project">
          <header>RENT-A-CAR</header>
          <a
            href="https://oktayrasimov.github.io/car-project/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="car-project-pic"
              className="section-project__car-img"
              src={carImg}
            />
          </a>
        </div>
      </div>
      <div className="projects-tech__container">
        <div className="tech-container">
          <header>Front End Used for the Projects</header>
          <div>
            <p>JavaScript</p>
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>SCSS</p>
            <p>TailWind</p>
          </div>
        </div>
        <div className="tech-container">
          <header>Other Tech</header>
          <div>
            <p>Framer Motion</p>
            <p>GSAP Animation</p>
            <p>Vercel</p>
            <p>Netlify</p>
            <p>JS Email</p>
            <p>Git</p>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
