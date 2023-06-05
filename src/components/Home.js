import "./Home.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faCity } from "@fortawesome/free-solid-svg-icons";
import haikeiCircles from "../haikeiCircles.svg";
import finalls from "./finalls.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-info-container">
        <h1 className="home-main-text">
          Front-end Web Developer{" "}
          <FontAwesomeIcon icon={faTag} className="icon" />
        </h1>
        <p className="home-second-text">
          Hi,i'm Oktay Rasimov. A <span>passionate</span> Front-end Developer
          based in Asenovgrad,Plovdiv{" "}
          <FontAwesomeIcon icon={faCity} className="icon" />
        </p>
      </div>
      <img src={finalls} />
    </div>
  );
};

export default Home;
