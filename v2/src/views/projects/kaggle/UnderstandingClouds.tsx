import UppercasedText from "../../../components/text/UppercasedText";
import UnderlinedLink from "../../../components/UnderlinedLink";

/**
 * UnderstandingClouds Component
 */
function UnderstandingClouds() {
	return (
		<div className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Nov 2019"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"Understanding Clouds from Satellite Images"}
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
					Built CNNs for automating cloud structure segmentation from
					satellite images. Placed 247/1538.
				</p>
				<ul>
					<li>
						<b>Code: </b>
						<UnderlinedLink href="https://github.com/jchen42703/understanding-clouds-kaggle">
							jchen42703/understanding-clouds-kaggle
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
						<b>Model Development: </b> Python, PyTorch, Catalyst,
						Google Colaboratory
					</li>
				</ul>
			</div>
		</div>
	);
}

export default UnderstandingClouds;
