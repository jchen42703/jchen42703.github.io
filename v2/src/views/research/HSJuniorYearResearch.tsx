import UppercasedText from "../../components/text/UppercasedText";
import VideoGIF from "../../components/video/videoGIF";
import heartMRI from "../../assets/la_003.mp4";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * HSJuniorYearResearch Component
 */
function HSJuniorYearResearch() {
	return (
		<div className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Fall 2018-Spring 2019"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={
						"Capsule Networks for the Automated Segmentation of Left Atrium in Cardiac MRI"
					}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Junior Year"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<p>
					Comparing 2D capsule networks to 2D convolutional neural
					networks for automated left atrium segmentation using Keras
					and Tensorflow. The proposed U-CapsNet (adding a U-Net
					feature extractor for the SegCaps) is based off{" "}
					<UnderlinedLink href="https://arxiv.org/pdf/1804.04241.pdf">
						Capsules for Object Segmentation's
					</UnderlinedLink>{" "}
					SegCaps architecture. The convolutional neural networks used
					are basic U-Nets with no residual connections and are based
					off of the{" "}
					<UnderlinedLink href="https://arxiv.org/pdf/1809.10486.pdf">
						nnU-Net: Self-adapting Framework for U-Net-Based Medical
						Image Segmentation
					</UnderlinedLink>
					, which actually won the challenge that this dataset was
					taken from.
				</p>
				<ul>
					<li>
						<b>Code: </b>{" "}
						<UnderlinedLink href="https://github.com/jchen42703/CapsNetsLASeg">
							https://github.com/jchen42703/CapsNetsLASeg
						</UnderlinedLink>
					</li>
					<li>
						{" "}
						<b>Paper: </b> {/* Link is relative to root */}
						<UnderlinedLink
							href={require("../../assets/pdf/Capsule_Networks_for_the_Automated_Segmentation_of_the_Left_Atrium_in_Cardiac_MRI.pdf")}
						>
							Capsule Networks for the Automated Segmentation of
							the Left Atrium in Cardiac MRI
						</UnderlinedLink>
					</li>
				</ul>
				<div className="flex flex-col justify-center items-center w-[100%] my-4">
					<VideoGIF src={heartMRI} className={"w-[80%]"}></VideoGIF>
				</div>
				<UppercasedText
					text={"Presentations & Awards"}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<ul>
					<li>NYCSEF Finalist</li>
					<li>JSHS Finalist</li>
				</ul>
			</div>
		</div>
	);
}

export default HSJuniorYearResearch;
