import { AnimatePresence, Cycle, motion } from "framer-motion";

/**
 * From: https://codesandbox.io/s/framer-motion-tutorial-rf6j2?file=/src/App.js
 */
function MobileDrawer({
	isOpen = false,
	toggleOpen,
	children,
}: {
	isOpen: boolean;
	toggleOpen: Cycle;
	children: React.ReactNode;
}) {
	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 0.3,
							}}
							exit={{
								opacity: 0,
							}}
							transition={{
								type: "spring",
								bounce: 0,
								duration: 0.2,
							}}
							onClick={() => toggleOpen()}
							className="z-10 bg-[#404040] px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
						/>
						<motion.div
							initial={{ x: "100%" }}
							animate={{
								x: 0,
							}}
							exit={{
								x: "100%",
							}}
							transition={{
								type: "spring",
								bounce: 0,
								duration: 0.4,
							}}
							className="z-10 fixed nav-drawer shadow-lg top-0 right-0 h-full w-full pt-5 px-10 sm:max-w-sm"
						>
							<button
								onClick={() => toggleOpen()}
								className="text-white text-4xl block mb-2 ml-auto"
							>
								&times;
							</button>
							{children}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

export default MobileDrawer;
