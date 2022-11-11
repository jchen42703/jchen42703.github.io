import UppercasedText from "../../components/text/UppercasedText";
import kidneySeg from "../../assets/label_case_00113.png";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * HSSenioYearResearch Component
 */
function HSSeniorYearResearch() {
	return (
		<div className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Fall 2019-Spring 2020"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={
						"2D Convolutional Neural Networks for Automated Kidney and Renal Tumor Segmentation"
					}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"High School Senior Year"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<p>
					Using 2D & 3D convolutional neural networks for the{" "}
					<UnderlinedLink href="https://kits19.grand-challenge.org/">
						2019 Kidney and Kidney Tumor Segmentation Challenge.
					</UnderlinedLink>{" "}
				</p>
				<ul>
					<li>
						<b>Code: </b>{" "}
						<UnderlinedLink href="https://github.com/jchen42703/kits19-cnn">
							jchen42703/kits19-cnn
						</UnderlinedLink>{" "}
					</li>
					<li>
						{" "}
						<b>Conference Paper: </b>{" "}
						<UnderlinedLink href="https://www.researchgate.net/publication/336247303_A_2D_U-Net_for_Automated_Kidney_and_Renal_Tumor_Segmentation">
							A 2D U-Net for Automated Kidney and Renal Tumor
							Segmentation{" "}
						</UnderlinedLink>{" "}
					</li>
				</ul>
				<div className="flex flex-col justify-center items-center w-[100%]">
					<img
						src={kidneySeg}
						alt="Kidney Segmentation"
						className="relative rounded-md w-[30%]"
					/>
				</div>
			</div>
		</div>
	);
}

export default HSSeniorYearResearch;
