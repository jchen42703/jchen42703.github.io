import TextButton from "./TextButton";
import "../styles/styles.scss";

export const LightInfoContainer = (props) => {
  return (
    <div className="info-container">
      <h1>
        Capsule Networks for the Automated Segmentation of Left Atrium in
        Cardiac MRI
      </h1>
      <img src="img/la_003.gif" alt="GIF" />
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
  );
};
