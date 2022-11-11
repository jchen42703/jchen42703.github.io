import { motion, Variants } from "framer-motion";
import UppercasedText from "../../components/text/UppercasedText";
import Welcome from "../../components/Welcome";

/**
 * Blog Component
 */
function Blog() {
	const textVariants: Variants[] = [
		{
			hidden: { x: "200%" },
			show: { x: 0 },
		},
	];

	return (
		<div id="research">
			<Welcome>
				{["Blog"].map((text, i) => (
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
			<div className="flex flex-col justify-center items-center h-[50vh] mx-8">
				<p className="text-2xl md:text-3xl text-center">
					Still in the works ( ˘▽˘)っ♨
				</p>
			</div>
		</div>
	);
}

export default Blog;
