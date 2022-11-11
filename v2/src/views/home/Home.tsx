import Welcome from "../../components/Welcome";
import AboutMe from "./AboutMe";
import { motion } from "framer-motion";
import UppercasedText from "../../components/text/UppercasedText";
import SlideIntoViewAnimation from "../../components/animations/SlideIntoView";

function Home() {
	const variants = {
		hidden: { y: "-100%" },
		show: {
			y: 0,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.3,
			},
		},
	};

	const textVariants = [
		{
			hidden: { y: "-100%" },
			show: { y: 0 },
		},
		{
			hidden: { y: "-550%" },
			show: { y: 0 },
		},
		{
			hidden: { x: "200%" },
			show: { x: 0 },
		},
	];

	return (
		<>
			<Welcome variants={variants}>
				{["Undergrad", "&", "(Ex) Founding SWE"].map((text, i) => (
					<motion.div key={text} variants={textVariants[i]}>
						<UppercasedText
							text={text}
							bold={true}
							classes="text-5xl md:text-7xl"
						></UppercasedText>
					</motion.div>
				))}
			</Welcome>
			<SlideIntoViewAnimation>
				<AboutMe></AboutMe>
			</SlideIntoViewAnimation>
		</>
	);
}

export default Home;
