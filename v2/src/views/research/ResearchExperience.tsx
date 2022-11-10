import { motion, Variants } from "framer-motion";
import SlideIntoViewAnimation from "../../components/animations/SlideIntoView";
import UppercasedText from "../../components/text/UppercasedText";
import Welcome from "../../components/Welcome";
import HSJuniorYearResearch from "./HSJuniorYearResearch";
import HSSeniorYearResearch from "./HSSeniorYearResearch";

/**
 * Research Experience Component
 */
function ResearchExperience() {
	const textVariants: Variants[] = [
		{
			hidden: { x: "200%" },
			show: { x: 0 },
		},
	];

	return (
		<div id="research">
			<Welcome>
				{["Machine Learning Research"].map((text, i) => (
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
							classes="text-7xl"
						></UppercasedText>
					</motion.div>
				))}
			</Welcome>
			<div className="content-container-no-top">
				<UppercasedText
					text={"Summary"}
					bold={true}
					classes={"text-3xl"}
				></UppercasedText>
				<p className="mt-4">
					In high school, I conducted independent, original research
					under the supervision of my teachers at my high school's
					Math Research program. We then presented our research at
					research fairs, such as the New York Science and Engineering
					Fair (NYCSEF) and the Junior Science and Humanities
					Symposium (JSHS). In my junior and senior years, I co-leaded
					the program and was in-charge of mentoring underclassmen's
					research.
				</p>
				<br />
				<p>
					All of the research I conducted was applying deep learning
					for automating parts of the medical image diagnosis
					pipeline.
				</p>
				<SlideIntoViewAnimation>
					<HSSeniorYearResearch></HSSeniorYearResearch>
				</SlideIntoViewAnimation>
				<SlideIntoViewAnimation>
					<HSJuniorYearResearch></HSJuniorYearResearch>
				</SlideIntoViewAnimation>
			</div>
		</div>
	);
}

export default ResearchExperience;
