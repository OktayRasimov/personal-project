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
        viewport={{ once: true }}
      >
        TechStack
      </motion.h1>
      <div className="technologies">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 3.4 }}
          viewport={{ once: true }}
        >
          <FaHtml5 />
        </motion.div>
        <motion.div
          initial={{ x: -180, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 4 }}
          viewport={{ once: true }}
        >
          <FaCss3Alt />
        </motion.div>
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 4.6 }}
          viewport={{ once: true }}
        >
          <FaJs />
        </motion.div>
        <motion.div
          initial={{ x: -330, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 5.2 }}
          viewport={{ once: true }}
        >
          <FaReact />
        </motion.div>
        <motion.div
          initial={{ x: -410, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 5.8 }}
          viewport={{ once: true }}
        >
          <SiTailwindcss />
        </motion.div>
        <motion.div
          initial={{ x: -490, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 6.4 }}
          viewport={{ once: true }}
        >
          <FaSass />
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
