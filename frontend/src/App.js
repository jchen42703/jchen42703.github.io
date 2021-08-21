import { DarkHeader } from "./components/Headers";
import Hero from "./components/Hero";
import TextButton from "./components/TextButton";
import capsnetGif from "./img/la_003.gif";
import kitsCase from "./img/label_case_00113.png";
import hackathon from "./img/hackathon_app_faster.gif";
import qhssCyber from "./img/qhsscyber_v2_demo.gif";
import "./styles/styles.scss";

const w80 = {
  width: "80%",
};

const block = {
  display: "block",
};

function App() {
  return (
    <div className="full-container">
      <Hero></Hero>
      <DarkHeader text="I. Research"></DarkHeader>
      <div className="info-container-wrapper">
        <div className="info-container">
          <h1>
            Capsule Networks for the Automated Segmentation of Left Atrium in
            Cardiac MRI
          </h1>
          <img src={capsnetGif} alt="loading..." />
          <div className="two-button-grid">
            <TextButton
              text="Code"
              linkHref="https://github.com/jchen42703/CapsNetsLASeg"
            ></TextButton>
            <TextButton
              text="Paper"
              linkHref="resources/Capsule_Networks_for_the_Automated_Segmentation_of_the_Left_Atrium_in_Cardiac_MRI.pdf"
            ></TextButton>
          </div>
        </div>
        <div className="info-container">
          <h1>
            2D Convolutional Neural Networks for Automated Kidney and Renal
            Tumor Segmentation
          </h1>
          <img src={kitsCase} alt="IMG" />
          <div className="two-button-grid">
            <TextButton
              text="Code"
              linkHref="https://github.com/jchen42703/kits19cnn"
            ></TextButton>
            <TextButton
              text="Publication"
              linkHref="https://kits.lib.umn.edu/wp-content/uploads/2019/11/jchen3_2.pdf"
            ></TextButton>
          </div>
        </div>
      </div>
      <DarkHeader text="II. Web Development"></DarkHeader>
      <div className="info-container-wrapper">
        <div className="info-container">
          <h1>MIT Hacking Medicine 2019 Submission</h1>
          <p>An App for Automatically Detecting Blast Cells</p>
          <img src={hackathon} alt="GIF" style={block} />
          <TextButton
            text="Website"
            linkHref="https://github.com/jchen42703/hacking_medicine_2019"
          ></TextButton>
        </div>

        <div class="info-container">
          <h1>QHSS Cyber</h1>
          <p>President</p>
          <p>
            Web Development Club // Hosting workshops and working on
            collaborative projects
          </p>
          <img src={qhssCyber} alt="GIF" style={block} />
          <TextButton
            text="Website"
            linkHref="https://qhsscyber.github.io/"
          ></TextButton>
        </div>
      </div>

      <DarkHeader text="III. Kaggle"></DarkHeader>
      <div class="info-container-wrapper">
        <div class="info-container">
          <h1>Severstal: Steel Defect Detection Challenge</h1>
          <p>171/2431</p>
          <TextButton
            text="Code"
            linkHref="https://github.com/jchen42703/understanding-clouds-kaggle"
          ></TextButton>
        </div>

        <div class="info-container">
          <h1>Understanding Clouds from Satellite Images</h1>
          <p>247/1538</p>
          <TextButton
            text="Code"
            linkHref="https://github.com/jchen42703/steel-defect-detection"
            style={w80}
          ></TextButton>
        </div>
      </div>
    </div>
  );
}

export default App;
