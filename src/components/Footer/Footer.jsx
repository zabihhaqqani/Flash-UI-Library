import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/zabihhaqqani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icons" />
        </a>

        <a
          href="https://linkedin.com/in/zabih-haqqani-7ab187191"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin  className="footer-icons"/>
        </a>

        <a
          href="https://twitter.com/Zabih01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="footer-icons" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
