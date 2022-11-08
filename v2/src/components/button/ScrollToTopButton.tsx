import { AnimatePresence, motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { useState, useEffect } from "react";
import { BsCaretUpSquareFill } from "react-icons/bs";
import { animateScroll } from "react-scroll";

const ScrollButton = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const displayAfterPx = 150;
	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.pageYOffset);
		};

		window.addEventListener("scroll", updatePosition);

		// Cleanup
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	const scrollToTop: MouseEventHandler<HTMLButtonElement> = () => {
		// For some reason, this is very inconsistent:
		// window.scrollTo({
		// 	top: 0,
		// 	behavior: "smooth",
		// });
		// It scrolls to the top sometimes, but sometimes it only scrolls a little bit and requires a second click to
		// do the scroll to the top
		animateScroll.scrollToTop({
			smooth: true,
		});
	};

	// Animation from: https://www.devforce.one/11765467/scroll-to-top-button-with-react-framer-motion#/
	return (
		<AnimatePresence>
			{scrollPosition > displayAfterPx && (
				<motion.button
					onClick={scrollToTop}
					initial={{ y: 100, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { duration: 0.6 },
					}}
					exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
					whileHover={{
						scale: 1.2,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 1 }}
					className="scroll-to-top-btn"
				>
					<BsCaretUpSquareFill />
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default ScrollButton;
