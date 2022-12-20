import { motion, Variants } from "framer-motion";
import SlideIntoViewAnimation from "../../components/animations/SlideIntoView";
import UppercasedText from "../../components/text/UppercasedText";
import Welcome from "../../components/Welcome";
import EasierMTLProject from "./appliedML/EasierMTLProject";
import IntroAppliedML from "./appliedML/IntroAppliedML";

/**
 * AppliedMLProjects Component
 */
function AppliedMLProjects() {
	const textVariants: Variants[] = [
		{
			hidden: { x: "200%" },
			show: { x: 0 },
		},
	];

	return (
		<div id="projects">
			<Welcome>
				{["Applied ML Projects"].map((text, i) => (
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
			<SlideIntoViewAnimation>
				<IntroAppliedML></IntroAppliedML>
			</SlideIntoViewAnimation>
			<div className="content-container-no-top">
				<SlideIntoViewAnimation>
					<UppercasedText
						text={"Timeline"}
						bold={true}
						classes={"text-3xl"}
					></UppercasedText>
					<EasierMTLProject></EasierMTLProject>
				</SlideIntoViewAnimation>
			</div>
		</div>
	);
}

export default AppliedMLProjects;
