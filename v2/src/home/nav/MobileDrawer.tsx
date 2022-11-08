import { AnimatePresence, Cycle, motion } from "framer-motion";

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
							className="fixed bg-indigo-600 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
						>
							<button
								onClick={() => toggleOpen()}
								className="bg-white text-black h-8 w-8 block mb-2 rounded-full"
							>
								&times;
							</button>
							{children}
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
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
							className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
						/>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

export default MobileDrawer;
