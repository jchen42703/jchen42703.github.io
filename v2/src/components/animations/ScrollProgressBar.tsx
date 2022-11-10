import { motion, useScroll } from "framer-motion";

function ScrollProgressBar() {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
		</>
	);
}

export default ScrollProgressBar;
