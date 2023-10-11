import "./Section3.css";
import carImg from "../../github-test.png";
import watchtrack from "../pics/watchtrack.png";
import pinpoint from "../pics/pinpointscreen.png";

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
            <h2 style={{ color: "#28c27f" }}> Granite Rentals 🚗</h2>
            <p>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use.The website provides an
              interface for searching,comparing,and reserving cars.
            </p>
            <footer>
              <a
                href="https://github.com/OktayRasimov/car-project"
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
            <header>Keep Track of Movies Watched</header>
            <a
              href="https://watch-track.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="car-project-pic"
                className="section-project__car-img"
                src={watchtrack}
              />
            </a>
          </div>
          <div className="car-project__info">
            <h2 style={{ color: "#28c27f" }}>WatchTrack 🎥 </h2>
            <p>
              Are you a movie enthusiast looking to keep track of the films
              you've watched and share your reviews with friends? Look no
              further than WatchTrack!
            </p>
            <footer>
              <a
                href="https://github.com/OktayRasimov/WatchTrack"
                target="_blank"
                rel="noreferrer"
              >
                Code 👩‍💻
              </a>
              <a
                href="https://watch-track.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ⚙
              </a>
            </footer>
          </div>
        </div>
        <div className="car-project__full">
          <div className="car-project">
            <header>Destination-Tracker</header>
            <a
              href="https://pin-point-beta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="car-project-pic"
                className="section-project__car-img"
                src={pinpoint}
              />
            </a>
          </div>
          <div className="car-project__info">
            <h2 style={{ color: "#28c27f" }}> PinPoint 🔎</h2>
            <p>
              Have you ever wanted to relive your travels or keep a record of
              every place you've explored? Look no further than PinPoint, the
              ultimate location tracking app!
            </p>
            <footer>
              <a
                href="https://github.com/OktayRasimov/PinPoint"
                target="_blank"
                rel="noreferrer"
              >
                Code 👩‍💻
              </a>
              <a
                href="https://pin-point-beta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
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
