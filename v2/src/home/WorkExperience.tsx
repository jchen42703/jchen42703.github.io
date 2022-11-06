import UppercasedText from "../components/text/UppercasedText";
import NemesisExperience from "./work/nemesis";
import Parallaxis2020Experience from "./work/parallaxis2020";
import Parallaxis2021Experience from "./work/parallaxis2021";

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
			<Parallaxis2021Experience></Parallaxis2021Experience>
			<Parallaxis2020Experience></Parallaxis2020Experience>
		</div>
	);
}

export default WorkExperience;
