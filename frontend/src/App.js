// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import VideoGIF from "./components/VideoGIF";
// import TextButton from "./components/TextButton";
// import kitsCase from "./assets/label_case_00113.png";
// import gravWave from "./assets/gravitational_wave.png";
import "./styles/styles.scss";
import BodyContainer from "./components/body/SelectableScroll";

// const w80 = {
//   width: "80%",
// };

function App() {
  return (
    <div className="full-container">
      <Hero></Hero>
      <BodyContainer></BodyContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
