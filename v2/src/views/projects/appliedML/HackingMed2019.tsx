import UppercasedText from "../../../components/text/UppercasedText";
import UnderlinedLink from "../../../components/UnderlinedLink";
import VideoGIF from "../../../components/video/videoGIF";

/**
 * HackingMed2019 Component
 */
function HackingMed2019() {
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
					text={"Hacking Medicine 2019"}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Current"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<p>
					Built a demo for classifying cancer in blood smear cells
					with Tensorflow/Keras for Hacking Medicine 2019.
				</p>
				<ul>
					<li>
						<b>Code: </b>{" "}
						<UnderlinedLink href="https://github.com/jchen42703/hacking_medicine_2019">
							jchen42703/hacking_medicine_2019
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
						<b>Backend + UI: </b> Flask + HTML
					</li>
					<li>
						<b>Model Development: </b> Tensorflow/Keras (MobileNet)
					</li>
				</ul>
				<div className="flex flex-col justify-center items-center w-[100%] my-4">
					<VideoGIF
						src={require("../../../assets/hacking_med_2019.mp4")}
						className={""}
					></VideoGIF>
				</div>
			</div>
		</div>
	);
}

export default HackingMed2019;
