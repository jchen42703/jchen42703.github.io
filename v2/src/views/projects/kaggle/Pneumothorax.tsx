import UppercasedText from "../../../components/text/UppercasedText";
import UnderlinedLink from "../../../components/UnderlinedLink";

/**
 * Pneumothorax Component
 */
function Pneumothorax() {
	return (
		<div className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Sept 2019"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"2019 SIIM-ACR Pneumothorax Segmentation"}
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
					Built CNNs for automatic pneumothorax segmentation in CT
					scans.
				</p>
				<ul>
					<li>
						<b>Code: </b>
						<UnderlinedLink href="https://github.com/jchen42703/pneumothorax-seg-cnn">
							jchen42703/pneumothorax-seg-cnn
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
						<b>Model Development: </b> Python, Tensorflow/Keras,
						Google Colaboratory
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Pneumothorax;
