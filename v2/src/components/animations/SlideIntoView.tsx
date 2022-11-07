import { motion } from "framer-motion";

/**
 * Slides the children from left to right while easing the container in.
 * @returns
 */
function SlideIntoViewAnimation({ children }: { children: React.ReactNode }) {
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
	return <motion.div {...slideIntoViewAnimation}>{children}</motion.div>;
}

export default SlideIntoViewAnimation;
