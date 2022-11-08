import UppercasedText from "../components/text/UppercasedText";
import NemesisExperience from "./work/nemesis";
import Parallaxis2020Experience from "./work/parallaxis2020";
import Parallaxis2021Experience from "./work/parallaxis2021";
import SlideIntoViewAnimation from "../components/animations/SlideIntoView";
import HSSeniorYearResearch from "./research/HSSeniorYearResearch";

/**
 * ProjectExperience Component
 */
function ProjectExperience() {
	return (
		<div id="projects-mlops" className="content-container-no-top">
			<UppercasedText
				text={"Applied ML (Hobby)"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<SlideIntoViewAnimation>
				<NemesisExperience></NemesisExperience>
			</SlideIntoViewAnimation>
			<SlideIntoViewAnimation>
				<Parallaxis2021Experience></Parallaxis2021Experience>
			</SlideIntoViewAnimation>
			<SlideIntoViewAnimation>
				<Parallaxis2020Experience></Parallaxis2020Experience>
			</SlideIntoViewAnimation>
			<SlideIntoViewAnimation>
				<HSSeniorYearResearch></HSSeniorYearResearch>
			</SlideIntoViewAnimation>
		</div>
	);
}

export default ProjectExperience;
