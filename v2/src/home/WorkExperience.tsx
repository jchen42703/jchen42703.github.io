import UppercasedText from "../components/text/UppercasedText";
import NemesisExperience from "./work/nemesis";

/**
 * Work Experience Component
 */
function WorkExperience() {
	return (
		<div id="aboutme" className="content-container-no-top">
			<UppercasedText
				text={"Work / Research / Projects"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<br />
			<NemesisExperience></NemesisExperience>
		</div>
	);
}

export default WorkExperience;
