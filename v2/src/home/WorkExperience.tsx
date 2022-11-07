import UppercasedText from "../components/text/UppercasedText";
import NemesisExperience from "./work/nemesis";
import Parallaxis2020Experience from "./work/parallaxis2020";
import Parallaxis2021Experience from "./work/parallaxis2021";
import { motion } from "framer-motion";

/**
 * Work Experience Component
 */
function WorkExperience() {
	const slideIntoViewAnimation = {
		initial: { x: "-100%", opacity: 0 },
		whileInView: { x: 0, opacity: 1 },
		viewport: {
			once: true,
		},
		transition: {
			ease: "anticipate",
			duration: 1.25,
		},
	};

	return (
		<div id="aboutme" className="content-container-no-top">
			<UppercasedText
				text={"Work & Research"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<br />
			<motion.div {...slideIntoViewAnimation}>
				<NemesisExperience></NemesisExperience>
			</motion.div>
			<motion.div {...slideIntoViewAnimation}>
				<Parallaxis2021Experience></Parallaxis2021Experience>
			</motion.div>
			<motion.div {...slideIntoViewAnimation}>
				<Parallaxis2020Experience></Parallaxis2020Experience>
			</motion.div>
		</div>
	);
}

export default WorkExperience;
