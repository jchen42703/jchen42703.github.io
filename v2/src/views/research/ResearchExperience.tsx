import { motion, Variants } from "framer-motion";
import SlideIntoViewAnimation from "../../components/animations/SlideIntoView";
import UppercasedText from "../../components/text/UppercasedText";
import UnderlinedLink from "../../components/UnderlinedLink";
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
					text={"Introduction"}
					bold={true}
					classes={"text-3xl mb-4"}
				></UppercasedText>
				<p>
					AI Research is how I actually got into programming! Big
					thanks to{" "}
					<UnderlinedLink href="https://sshussain.me/">
						Suha Hussain
					</UnderlinedLink>{" "}
					for dragging me out of my battlefield surgeon bubble into CS
					and research!
				</p>
				<br />
				<p>
					In high school, I conducted independent, original research
					under the supervision of my teachers/upperclassmen at my
					high school's Math Research program. We then presented our
					research at research fairs, such as the New York Science and
					Engineering Fair (NYCSEF) and the Junior Science and
					Humanities Symposium (JSHS). In my junior and senior years,
					I co-leaded the program and was in-charge of mentoring
					underclassmen's research.
				</p>
				<br />
				<p>
					All of the research I conducted was applying deep learning
					for automating parts of the medical image diagnosis
					pipeline, and I trained the models using Google
					Colaboratory.
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
