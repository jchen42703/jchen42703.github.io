import { motion, Variants } from "framer-motion";
import SlideIntoViewAnimation from "../../components/animations/SlideIntoView";
import UppercasedText from "../../components/text/UppercasedText";
import Welcome from "../../components/Welcome";
import GravWave from "./kaggle/GravWave";
import IntroKaggle from "./kaggle/IntroAppliedML";
import Pneumothorax from "./kaggle/Pneumothorax";
import SteelDefect from "./kaggle/SteelDefect";
import UnderstandingClouds from "./kaggle/UnderstandingClouds";

/**
 * KaggleProjects Component
 */
function KaggleProjects() {
	const textVariants: Variants[] = [
		{
			hidden: { x: "200%" },
			show: { x: 0 },
		},
	];

	return (
		<div id="projects">
			<Welcome>
				{["Kaggle Projects"].map((text, i) => (
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
				<IntroKaggle></IntroKaggle>
			</SlideIntoViewAnimation>
			<div className="content-container-no-top">
				<SlideIntoViewAnimation>
					<UppercasedText
						text={"Timeline"}
						bold={true}
						classes={"text-3xl"}
					></UppercasedText>
					<GravWave></GravWave>
				</SlideIntoViewAnimation>
				<SlideIntoViewAnimation>
					<UnderstandingClouds></UnderstandingClouds>
				</SlideIntoViewAnimation>
				<SlideIntoViewAnimation>
					<SteelDefect></SteelDefect>
				</SlideIntoViewAnimation>
				<SlideIntoViewAnimation>
					<Pneumothorax></Pneumothorax>
				</SlideIntoViewAnimation>
			</div>
		</div>
	);
}

export default KaggleProjects;
