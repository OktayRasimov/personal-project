import "./Section4.css";
import Contact from "./Contact";
import Map from "./Map";
import s4back from "../../ccchaos (1).svg";

const Section4 = () => {
  return (
    <div className="section-4">
      <Contact />

      <Map />
      <img src={s4back} />
    </div>
  );
};

export default Section4;
