import UppercasedText from "../components/text/UppercasedText";
import NavigationMenu from "./NavigationMenu";

/**
 * Welcome and Navigation Component
 */
function Welcome() {
	const noLinkFields = ["Joseph Chen", "NYC, NY", "CS 3rd Year @ CWRU"];

	return (
		<div className="grid grid-cols-4 content-container gap-x-0.75">
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

			<NavigationMenu></NavigationMenu>

			<div className="col-span-2 flex flex-col text-right">
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
