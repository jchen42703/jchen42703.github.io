import { useMediaQuery } from "react-responsive";
import UppercasedText from "../components/text/UppercasedText";
import { mediaQueries } from "../services/mediaQueries";
import NavigationMenu from "./nav/NavigationMenu";

/**
 * Welcome and Navigation Component
 */
function Welcome() {
	const isMobile = useMediaQuery({
		query: mediaQueries.limitToMobile,
	});

	const noLinkFields = ["Joseph Chen", "NYC, NY", "CS 3rd Year @ CWRU"];

	// Responsively renders the top components (basic info + nav menu)
	const renderTop = () => {
		console.log("is mobile: ", isMobile);
		if (isMobile) {
			return (
				<div className="flex flex-row justify-between">
					<div className="flex flex-col">
						{noLinkFields.map((text) => (
							<UppercasedText
								key={text}
								text={text}
								bold={true}
								classes="text-lg"
							></UppercasedText>
						))}
					</div>
					<NavigationMenu isMobile={isMobile}></NavigationMenu>
				</div>
			);
		}

		return (
			<>
				<div className="col-span-1 flex flex-col">
					{noLinkFields.map((text) => (
						<UppercasedText
							key={text}
							text={text}
							bold={true}
							classes="text-lg"
						></UppercasedText>
					))}
				</div>
				<NavigationMenu isMobile={isMobile}></NavigationMenu>
			</>
		);
	};
	return (
		<div className="flex flex-col md:grid md:grid-cols-4 content-container gap-x-0.75">
			{renderTop()}

			<div className="flex flex-col text-left md:col-span-2 md:text-right">
				{["Undergrad", "&", "(Ex) Founding SWE"].map((text) => (
					<UppercasedText
						key={text}
						text={text}
						bold={true}
						classes="text-7xl"
					></UppercasedText>
				))}
			</div>
		</div>
	);
}

export default Welcome;
