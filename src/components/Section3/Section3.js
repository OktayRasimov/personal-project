import "./Section3.css";
import carImg from "../../github-test.png";
import comingSoon from "../../coming-soon.png";

const Section3 = () => {
  return (
    <div className="section-3__container">
      <h1>PROJECTS</h1>
      <div className="projects-container">
        <div className="car-project__full">
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
          <div className="car-project__info">
            <h2> Granite Rentals 🚗</h2>
            <p>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use.The website provides an
              interface for searching,comparing,and reserving cars.
            </p>
            <footer>
              <a
                href="https://github.com/OktayRasimov/car-project/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                Code 👩‍💻
              </a>
              <a
                href="https://oktayrasimov.github.io/car-project/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ⚙
              </a>
            </footer>
          </div>
        </div>
        <div className="car-project__full flip">
          <div className="car-project">
            <header>Holiday Tracker</header>
            <a href="#" rel="noreferrer">
              <img
                alt="car-project-pic"
                className="section-project__car-img"
                src={comingSoon}
              />
            </a>
          </div>
          <div className="car-project__info">
            <h2>WorldWise ✈</h2>
            <p>
              A Holiday or adventure tracker app.To have a notebook of your
              favourite destinations with the precise locations of where youve
              been and also to remeber if its worth a second visit
            </p>
            <footer>
              <a href="#" rel="noreferrer">
                Code 👩‍💻
              </a>
              <a href="#" rel="noreferrer">
                Live Demo ⚙
              </a>
            </footer>
          </div>
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
