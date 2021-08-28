import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/styles.scss";

const Footer = (props) => {
  return (
    <footer>
      <h3 id="contact">Contact</h3>
      <p>
        Contact me at jchen42703 "at" gmail "dot" com or at jxc1598 "at"
        case.edu.
      </p>
      <div className="fab-row">
        <a
          href="https://www.linkedin.com/in/joseph-chen-47b74615a/"
          className="fab"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="fontawesome" />
        </a>
        <a href="https://github.com/jchen42703" className="fab">
          <FontAwesomeIcon icon={["fab", "github"]} className="fontawesome" />
        </a>
        <a href="https://www.instagram.com/jchen___zz/" className="fab">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="fontawesome"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
