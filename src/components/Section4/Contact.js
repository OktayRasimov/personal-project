import "./Contact.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3sc80vj",
        "template_5vdw9dc",
        refForm.current,
        "m-gtRXYWIsSz2Lt9G"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message,please try again");
        }
      );
  };

  return (
    <div className="contact-container">
      <motion.h1>Contact me</motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.8 }}
      >
        If you have any recommendations for my personal project or my other
        projects feel free to send me a message on what i can tweak and make
        better in your opinian and ill have a look or if you want to collab on a
        project. PLEASE DO ⬇⬇⬇
      </motion.p>
      <motion.div
        className="contact-form-container"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <li className="half grid-1">
              <input type="text" placeholder="Name" name="name" />
            </li>
            <li className="half grid-2">
              <input type="email" placeholder="Email" name="email" />
            </li>
            <li className="half grid-3">
              <input type="text" placeholder="Subject" name="subject" />
            </li>
            <li className="half grid-4">
              <input type="text" placeholder="Message" name="message" />
            </li>
            <li className="half grid-5">
              <motion.input
                type="submit"
                className="contact-button"
                value="SEND"
                whileHover={{ scale: 1.2 }}
              />
            </li>
          </ul>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
