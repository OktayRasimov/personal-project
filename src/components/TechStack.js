import "./TechStack.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <div className="tech-stack-container">
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        TechStack
      </motion.h1>
      <div className="technologies">
        <motion.div
          initial={{ x: -90, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 3.4 }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <FaHtml5 />
        </motion.div>
        <motion.div
          initial={{ x: -180, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <FaCss3Alt />
        </motion.div>
        <motion.div
          initial={{ x: -260, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 4.6 }}
        >
          <FaJs />
        </motion.div>
        <motion.div
          initial={{ x: -340, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 5.2 }}
        >
          <FaReact />
        </motion.div>
        <motion.div
          initial={{ x: -420, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 5.8 }}
        >
          <SiTailwindcss />
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 6.4 }}
        >
          <FaSass />
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
