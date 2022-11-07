import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsCaretUpSquareFill } from "react-icons/bs";

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ ease: "easeOut", duration: 0.5 }}
				>
					<div className="scroll-to-top-btn">
						<BsCaretUpSquareFill
							onClick={scrollToTop}
							// style={{ display: visible ? "inline" : "none" }}
						/>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ScrollButton;
