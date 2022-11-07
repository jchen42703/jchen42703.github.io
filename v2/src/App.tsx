import AboutMe from "./home/AboutMe";
import Welcome from "./home/Welcome";
import WorkExperience from "./home/WorkExperience";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./styles/styles.scss";
import ScrollButton from "./components/button/ScrollToTopButton";
import { motion, useScroll } from "framer-motion";

library.add(fab);

function App() {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
			<Welcome></Welcome>
			<AboutMe></AboutMe>
			<WorkExperience></WorkExperience>
			<ScrollButton></ScrollButton>
		</>
	);
}

export default App;
