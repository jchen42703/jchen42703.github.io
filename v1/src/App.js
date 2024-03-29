import { DarkHeader } from "./components/Headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import VideoGIF from "./components/VideoGIF";
import TextButton from "./components/TextButton";
import kitsCase from "./assets/label_case_00113.png";
import gravWave from "./assets/gravitational_wave.png";
import "./styles/styles.scss";

const w80 = {
  width: "80%",
};

function App() {
  return (
    <div className="full-container">
      <Hero></Hero>
      <DarkHeader text="I. Work Experience"></DarkHeader>
      <div className="info-container-wrapper-col">
        <div className="info-container">
          <h1 style={{ padding: "5% 5% 0% 5%" }}>Parallaxis LLC</h1>
          <a href=" https://twitter.com/rattenfangerio" className="fab">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="fontawesome"
            />
          </a>
          <span style={{ fontWeight: "600" }}>August 2021 - December 2021</span>
          <p style={{ padding: "0% 5%" }}>
            Built core features for Rattenfanger CLI, a Go Lang shoe bot that
            automatically checks out high-demand, low stock shoes, with a small
            team of developers. Reverse engineering anti-bot protection was done
            with Charles Proxy and Insomnia.
          </p>
          <span style={{ fontWeight: "600" }}>Summer 2021</span>
          <p style={{ padding: "0% 5%" }}>
            Frontend development for an inventory tracking mobile app with Vue,
            Ionic and Tailwind CSS in a small team environment. Release date
            TBD.
          </p>
          <VideoGIF
            src={require("./assets/ai_mouse_movements.mp4")}
            style={{ margin: "2% 0 5% 0%" }}
          ></VideoGIF>
          <span style={{ fontWeight: "600" }}>Summer 2020 - Fall 2020 </span>
          <p style={{ padding: "0% 5%" }}>
            Developed a Bidirectional LSTM GAN to automate mouse movements and
            deployed the model to a production REST API using Tensorflow.js and
            Express.
          </p>
        </div>
      </div>
      <DarkHeader text="II. Research"></DarkHeader>
      <div className="info-container-wrapper">
        <div className="info-container">
          <h1>
            Capsule Networks for the Automated Segmentation of Left Atrium in
            Cardiac MRI
          </h1>
          <VideoGIF src={require("./assets/la_003.mp4")}></VideoGIF>
          <div className="two-button-grid">
            <TextButton
              text="Code"
              linkHref="https://github.com/jchen42703/CapsNetsLASeg"
            ></TextButton>
            <TextButton
              text="Paper"
              linkHref={require("./assets/pdf/Capsule_Networks_for_the_Automated_Segmentation_of_the_Left_Atrium_in_Cardiac_MRI.pdf")}
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

      <div className="info-container">
        <h1 style={{ padding: "0% 2.5%" }}>
          Automatically Detecting Gravitational Wave Noise
        </h1>
        <img src={gravWave} alt="" style={{ margin: "2% 0 5% 0%" }} />
        <TextButton
          text="Code"
          linkHref="https://github.com/jchen42703/g2net_ml_dl"
        ></TextButton>
      </div>

      <DarkHeader text="III. Web Development"></DarkHeader>

      <div className="info-container-wrapper" style={{ padding: "0%" }}>
        <div className="info-container">
          <h1>Automatically Forecasting Earthquake Damage</h1>
          <p>
            Created an app for automatically forecasting earthquake damage with
            React and FastAPI. Deployed using Docker. The machine learning
            models were done with a partner using catboost and lightgbm.
          </p>
          <VideoGIF
            src={require("./assets/small_eq_damage_forecast.mp4")}
          ></VideoGIF>
          <div className="two-button-grid">
            <TextButton
              text="Website"
              linkHref="https://earthquakedamageforecast.com/"
            ></TextButton>
            <TextButton
              text="Code"
              linkHref="https://github.com/jchen42703/earthquake_forecasting"
            ></TextButton>
          </div>
        </div>

        <div className="info-container" style={{ padding: "0%" }}>
          <h1>Logos Community Church Website</h1>
          <p style={{ padding: "0%" }}>
            Static website with HTML and SCSS deployed using Github Pages
          </p>
          <VideoGIF
            src={require("./assets/small_lcc_github_io.mp4")}
          ></VideoGIF>
          <div className="two-button-grid">
            <TextButton
              text="Website"
              linkHref="http://em.logosny.org"
            ></TextButton>
            <TextButton
              text="Code"
              linkHref="https://github.com/logosnyc/logosnyc.github.io"
            ></TextButton>
          </div>
        </div>
      </div>

      <div className="info-container-wrapper">
        <div className="info-container">
          <h1>MIT Hacking Medicine 2019 Submission</h1>
          <p>An App for Automatically Detecting Blast Cells</p>
          <VideoGIF src={require("./assets/hackathon.mp4")}></VideoGIF>
          <TextButton
            text="Code"
            linkHref="https://github.com/jchen42703/hacking_medicine_2019"
          ></TextButton>
        </div>

        <div className="info-container">
          <h1>QHSS Cyber</h1>
          <span style={{ padding: "0%" }}>President</span>
          <p>
            Web Development Club // Hosting workshops and working on
            collaborative projects
          </p>
          <VideoGIF src={require("./assets/qhssCyber.mp4")}></VideoGIF>
          <TextButton
            text="Website"
            linkHref="https://qhsscyber.github.io/"
          ></TextButton>
        </div>
      </div>

      <DarkHeader text="IV. Kaggle"></DarkHeader>
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
