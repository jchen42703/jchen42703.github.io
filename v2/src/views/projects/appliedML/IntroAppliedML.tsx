import UppercasedText from "../../../components/text/UppercasedText";

/**
 * IntroAppliedML Component
 */
function IntroAppliedML() {
	return (
		<div className="content-container-no-top-half-bot">
			<UppercasedText
				text={"About"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<p className="mt-4">
				This section displays projects I worked on that use ML models in
				a practical way (i.e. through an API or web app). The showcased
				projects are:
			</p>
			<ul className="mt-4">
				<li>
					Earthquake Damage Forecasting
					(React/FastAPI/Catboost/LightGBM)
				</li>
				<li>
					EasierMTL Quantized BERT Demo
					(React/FastAPI/PyTorch/HuggingFace)
				</li>
				<li>Hacking Medicine 2019 (Flask/Keras)</li>
			</ul>
		</div>
	);
}

export default IntroAppliedML;
