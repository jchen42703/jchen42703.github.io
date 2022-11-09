import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollButton from "./components/button/ScrollToTopButton";
import Footer from "./components/footer";
import ScrollProgressBar from "./components/animations/ScrollProgressBar";
import ProjectExperience from "./views/projects/ProjectExperience";
import ErrorPage from "./views/error";
import WorkExperience from "./views/work/WorkExperience";
import Home from "./views/home/Home";
import "./styles/styles.scss";

library.add(fab);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
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
