import { motion, Variants } from "framer-motion";
import UppercasedText from "../../components/text/UppercasedText";
import NemesisExperience from "../work/nemesis";
import Parallaxis2020Experience from "../work/parallaxis2020";
import Parallaxis2021Experience from "../work/parallaxis2021";
import SlideIntoViewAnimation from "../../components/animations/SlideIntoView";
import Welcome from "../../components/Welcome";

/**
 * Work Experience Component
 */
function WorkExperience() {
	const textVariants: Variants[] = [
		{
			hidden: { x: "200%" },
			show: { x: 0 },
		},
	];

	return (
		<div id="workexp">
			<Welcome>
				{["Work Experience"].map((text, i) => (
					<motion.div
						key={text}
						variants={textVariants[i]}
						transition={{
							ease: "anticipate",
							duration: 1.5,
						}}
					>
						<UppercasedText
							text={text}
							bold={true}
							classes="text-5xl md:text-7xl"
						></UppercasedText>
					</motion.div>
				))}
			</Welcome>
			<div className="content-container-no-top">
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
		</div>
	);
}

export default WorkExperience;
