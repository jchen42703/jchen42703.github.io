import AboutMe from "./views/home/AboutMe";
import Welcome from "./views/home/Welcome";
import WorkExperience from "./views/work/WorkExperience";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./styles/styles.scss";
import ScrollButton from "./components/button/ScrollToTopButton";
import ScrollProgressBar from "./components/animations/ScrollProgressBar";
import ProjectExperience from "./views/projects/ProjectExperience";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./views/error";

library.add(fab);

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Welcome></Welcome>
				<AboutMe></AboutMe>
			</>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "work",
		element: <WorkExperience></WorkExperience>,
	},
	{
		path: "research",
		element: <ProjectExperience></ProjectExperience>,
	},
	{
		path: "projects",
		element: <ProjectExperience></ProjectExperience>,
	},
	{
		path: "blog",
		element: <div>WIP</div>,
	},
]);

function App() {
	return (
		<>
			<ScrollProgressBar></ScrollProgressBar>
			<RouterProvider router={router}></RouterProvider>
			<Footer></Footer>
			<ScrollButton></ScrollButton>
		</>
	);
}

export default App;
