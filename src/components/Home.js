import "./Home.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faCity } from "@fortawesome/free-solid-svg-icons";

import finalls from "../components/pics/my-main_final.png";
import TechStack from "./TechStack";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="home-info-container"
        >
          <h1 className="home-main-text">
            Front-end Web Developer{" "}
            <FontAwesomeIcon icon={faTag} className="icon" />
          </h1>
          <p className="home-second-text">
            Hi,i'm Oktay Rasimov. A <span>passionate</span> Front-end Developer
            based in Asenovgrad,Plovdiv{" "}
            <FontAwesomeIcon icon={faCity} className="icon" />
          </p>
        </motion.div>
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={finalls}
        />
      </div>
      <TechStack />
    </>
  );
};

export default Home;
