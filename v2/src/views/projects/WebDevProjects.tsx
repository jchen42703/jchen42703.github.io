import { motion, Variants } from "framer-motion";
import SlideIntoViewAnimation from "../../components/animations/SlideIntoView";
import UppercasedText from "../../components/text/UppercasedText";
import Welcome from "../../components/Welcome";
import IntroWebDev from "./webDev/IntroWebDev";
import LyneProject from "./webDev/LyneProject";

/**
 * WebDevProjects Component
 */
function WebDevProjects() {
	const textVariants: Variants[] = [
		{
			hidden: { x: "200%" },
			show: { x: 0 },
		},
	];

	return (
		<div id="projects">
			<Welcome>
				{["Web Development Projects"].map((text, i) => (
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
				<IntroWebDev></IntroWebDev>
			</SlideIntoViewAnimation>
			<div className="content-container-no-top">
				<UppercasedText
					text={"Timeline"}
					bold={true}
					classes={"text-3xl"}
				></UppercasedText>
				<SlideIntoViewAnimation>
					<LyneProject></LyneProject>
				</SlideIntoViewAnimation>
				<SlideIntoViewAnimation>
					<div className="flex flex-col justify-center items-center h-[50vh] mx-8">
						<p className="text-2xl md:text-3xl text-center">
							Still in the works ( ˘▽˘)っ♨
						</p>
					</div>
				</SlideIntoViewAnimation>
			</div>
		</div>
	);
}

export default WebDevProjects;
