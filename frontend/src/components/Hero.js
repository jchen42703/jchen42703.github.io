import TextButton from "./TextButton";
import "../styles/styles.scss";

const margins = {
  marginTop: "7%",
};

const twoButtonGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "10%",
  padding: "0 5%",
};

const Hero = (props) => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Hi! I'm Joseph!</h1>
        <p>Student Web developer & Deep Learning Researcher</p>
        <div style={{ ...margins, ...twoButtonGrid }}>
          <TextButton text="Contact" linkHref="#contact"></TextButton>
          <TextButton
            text="Resume"
            linkHref="../resources/resume.pdf"
          ></TextButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
