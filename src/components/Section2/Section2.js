import "./Section2.css";
import finalls from "../pics/finalls.png";
import astronaut from "../../astronaut_green.svg";
// import glowy from "../../ccchaos.svg";
import ccchaos from "../../ccchaos (1).svg";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="section-2-container">
      <h1>About me</h1>
      <div className="about-me-bottom">
        <h5>hi there,im glad to have you here</h5>
        <p>
          My passion for web developement started in{" "}
          <span className={"colorSpan"}>December 2022</span> when i began
          building very simple sort of like little game projects , guess the
          number , tic tac toe etc.
        </p>
        <p>
          Since then,i have been constantly advancing and expanding my knowledge
          in this field.After some time while still learning <span>JS</span> i
          felt the urge to dive deeper into web development which led me to
          learn how to code in <span className={"colorSpan"}>HTML</span>,
          <span className={"colorSpan"}>CSS</span>.
        </p>
        <p>
          With each project i strive to create a unique and effective solution
          while integrating the{" "}
          <span className={"colorSpan"}>latest web technologies</span>
        </p>

        <motion.img
          src={astronaut}
          className="astronaut"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
      </div>
    </div>
  );
};

export default Section2;
