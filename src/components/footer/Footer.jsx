import React from "react";
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        Filipe Guedes
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/filipe--guedes/"
        >
          <FaLinkedinIn />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/MeerKatPT">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
