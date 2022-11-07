import UppercasedText from "../components/text/UppercasedText";
import NemesisExperience from "./work/nemesis";
import Parallaxis2020Experience from "./work/parallaxis2020";
import Parallaxis2021Experience from "./work/parallaxis2021";
import SlideIntoViewAnimation from "../components/animations/SlideIntoView";

/**
 * Work Experience Component
 */
function WorkExperience() {
	return (
		<div id="aboutme" className="content-container-no-top">
			<UppercasedText
				text={"Work & Research"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<br />
			<SlideIntoViewAnimation>
				<NemesisExperience></NemesisExperience>
			</SlideIntoViewAnimation>
			<SlideIntoViewAnimation>
				<Parallaxis2021Experience></Parallaxis2021Experience>
			</SlideIntoViewAnimation>
			<SlideIntoViewAnimation>
				<Parallaxis2020Experience></Parallaxis2020Experience>
			</SlideIntoViewAnimation>
		</div>
	);
}

export default WorkExperience;
