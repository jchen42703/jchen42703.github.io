import UppercasedText from "../../../components/text/UppercasedText";
import UnderlinedLink from "../../../components/UnderlinedLink";

/**
 * SteelDefect Component
 */
function SteelDefect() {
	return (
		<div className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Oct 2019"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"Severstal: Steel Defect Detection"}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Senior Year of High School"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<p>
					Built CNNs to automatically detect steel defects in images.
				</p>
				<ul>
					<li>
						<b>Code: </b>
						<UnderlinedLink href="https://github.com/jchen42703/steel-defect-detection">
							jchen42703/steel-defect-detection
						</UnderlinedLink>
					</li>
				</ul>
				<UppercasedText
					text={"Tech Stack"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<br />
				<ul className="list-items mt-2">
					<li>
						<b>Model Development: </b> Python, PyTorch, Catalyst
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SteelDefect;
