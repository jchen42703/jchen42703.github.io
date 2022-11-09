import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError() as {
		statusText: string;
		message: string;
	};
	console.error(error);

	return (
		<div
			id="error-page"
			className="flex flex-col h-[100vh] w-[100%] justify-center items-center text-center"
		>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<p className="mt-2 text-5xl">😭</p>
		</div>
	);
}
