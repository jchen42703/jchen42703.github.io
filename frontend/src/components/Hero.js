import TextButton from "./TextButton";
import "../styles/styles.scss";

const margins = {
  marginTop: "7%",
};

const Hero = (props) => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Hi! I'm Joseph!</h1>
        <span>CS Sophomore @ CWRU</span>
        <p>Fullstack Web Development & Machine Learning Enthusiast!</p>
        <div style={margins} className="two-button-grid">
          <TextButton text="Contact" linkHref="#contact"></TextButton>
          <TextButton
            text="Resume"
            linkHref={require("../assets/pdf/chen_joseph_resume.pdf").default}
          ></TextButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
