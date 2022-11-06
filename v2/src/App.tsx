import AboutMe from "./home/AboutMe";
import Welcome from "./home/Welcome";
import WorkExperience from "./home/WorkExperience";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./styles/styles.scss";

library.add(fab);

function App() {
	return (
		<>
			<Welcome></Welcome>
			<AboutMe></AboutMe>
			<WorkExperience></WorkExperience>
		</>
	);
}

export default App;
