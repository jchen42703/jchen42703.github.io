import UppercasedText from "../../../components/text/UppercasedText";

/**
 * IntroKaggle Component
 */
function IntroKaggle() {
	return (
		<div className="content-container-no-top-half-bot">
			<UppercasedText
				text={"About"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<p className="mt-4">
				This section summarizes my submissions for Kaggle competitions I
				competed in. These competitions set a good foundation for
				understanding how ML models would be developed in the real
				world, as opposed to just for research. These include:
			</p>
			<ul className="mt-4">
				<li>Gravitational Wave Detection</li>
				<li>Severstal: Steel Defect Detection</li>
				<li>Understanding Clouds From Satellite Images</li>
				<li>2019 SIIM-ACR Pneumothorax Segmentation</li>
			</ul>
		</div>
	);
}

export default IntroKaggle;
