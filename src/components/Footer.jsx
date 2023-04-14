import React from "react";
import image from "../assets/Mnai.jpeg"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={image}
          alt="Manish"
        />

        <h2>Manish Srivastav</h2>
        <p>Hustle Till you Rock</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/manissri18" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/ruhaan.18?igshid=ZDdkNTZiNTM=" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Mani5746" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
