import { DarkHeader } from "./components/Headers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import VideoGIF from "./components/VideoGIF";
import TextButton from "./components/TextButton";
import kitsCase from "./assets/label_case_00113.png";
import "./styles/styles.scss";

const w80 = {
  width: "80%",
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
          <VideoGIF src={require("./assets/la_003.mp4").default}></VideoGIF>
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
          <img src={kitsCase} alt="" />
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
          <VideoGIF src={require("./assets/hackathon.mp4").default}></VideoGIF>
          <TextButton
            text="Website"
            linkHref="https://github.com/jchen42703/hacking_medicine_2019"
          ></TextButton>
        </div>

        <div className="info-container">
          <h1>QHSS Cyber</h1>
          <p>President</p>
          <p>
            Web Development Club // Hosting workshops and working on
            collaborative projects
          </p>
          <VideoGIF src={require("./assets/qhssCyber.mp4").default}></VideoGIF>
          <TextButton
            text="Website"
            linkHref="https://qhsscyber.github.io/"
          ></TextButton>
        </div>
      </div>

      <DarkHeader text="III. Kaggle"></DarkHeader>
      <div className="info-container-wrapper">
        <div className="info-container">
          <h1>Severstal: Steel Defect Detection Challenge</h1>
          <p>171/2431</p>
          <TextButton
            text="Code"
            linkHref="https://github.com/jchen42703/understanding-clouds-kaggle"
          ></TextButton>
        </div>

        <div className="info-container">
          <h1>Understanding Clouds from Satellite Images</h1>
          <p>247/1538</p>
          <TextButton
            text="Code"
            linkHref="https://github.com/jchen42703/steel-defect-detection"
            style={w80}
          ></TextButton>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
