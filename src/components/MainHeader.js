import "./MainHeader.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useState, useEffect } from "react";

gsap.registerPlugin(ScrollToPlugin);

const MainHeader = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  // Update navbar fixed state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsNavbarFixed(scrollTop > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={isNavbarFixed ? "main-header active" : "main-header"}>
        <h2>Oktay.dev</h2>
        <div>
          <a
            href="#home"
            onClick={() =>
              gsap.to(window, {
                duration: 0.8,
                scrollTo: ".section-first",
              })
            }
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() =>
              gsap.to(window, {
                duration: 0.8,
                scrollTo: ".section-2-container",
              })
            }
          >
            About
          </a>
          <a href="#Projects">Projects</a>
          <a
            href="#Contact-me"
            onClick={() =>
              gsap.to(window, {
                duration: 0.8,
                scrollTo: ".contact-container",
              })
            }
          >
            Contact
          </a>
        </div>
      </div>
      {isNavbarFixed && <div style={{ height: "15vh" }} />}
    </>
  );
};

export default MainHeader;
