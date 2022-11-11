import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollButton from "./components/button/ScrollToTopButton";
import Footer from "./components/footer";
import ScrollProgressBar from "./components/animations/ScrollProgressBar";
import ProjectExperience from "./views/projects/ProjectExperience";
import WorkExperience from "./views/work/WorkExperience";
import ResearchExperience from "./views/research/ResearchExperience";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import ErrorPage from "./views/error";
import "./styles/styles.scss";

library.add(fab);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "work",
		element: <WorkExperience />,
	},
	{
		path: "research",
		element: <ResearchExperience />,
	},
	{
		path: "projects",
		element: <ProjectExperience />,
	},
	{
		path: "blog",
		element: <Blog />,
	},
]);

function App() {
	return (
		<>
			<ScrollProgressBar></ScrollProgressBar>
			<RouterProvider router={router}></RouterProvider>
			<ScrollButton></ScrollButton>
			<Footer></Footer>
		</>
	);
}

export default App;
