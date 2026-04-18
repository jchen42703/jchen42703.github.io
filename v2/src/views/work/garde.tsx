import UppercasedText from "../../components/text/UppercasedText";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * GardeExperience Component
 */
function GardeExperience() {
	return (
		<div id="garde" className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"March 2026-Now"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"Garde"}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Technical Founder"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<p className="mt-1 italic">NYC, New York</p>
				<div className="flex flex-row mt-2">
					<UnderlinedLink href="https://garde.app" className="mr-2">
						[Official Website]
					</UnderlinedLink>
				</div>
			</div>
		</div>
	);
}

export default GardeExperience;
