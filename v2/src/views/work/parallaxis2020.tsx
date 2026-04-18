import UppercasedText from "../../components/text/UppercasedText";
import mouseMovementsGif from "../../assets/mouse_movements.gif";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * Parallaxis2020Experience Component
 */
function Parallaxis2020Experience() {
	return (
		<div id="parallaxis-ml" className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"May-Nov 2020"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<img
					src={mouseMovementsGif}
					alt="mouse movements demo"
					className="rounded-md"
				/>
				<UppercasedText
					text={"Rattenfanger"}
					bold={true}
					classes={"text-2xl inline-block mt-4"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Machine Learning R&D Intern"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<p className="mt-1 italic">NYC, New York</p>
				<div className="flex flex-row mt-2">
					<UnderlinedLink
						href="https://github.com/jchen42703/ai_mouse_movements"
						className="mr-2"
					>
						[GitHub]
					</UnderlinedLink>
				</div>
				<div className="mt-4">
					<p>
						Researched and developed a generative adversarial neural
						network to automatically generate mouse movements in
						Python/TensorFlow for an API serving bursts of 1 million
						requests per hour to bypass anti-bot protection.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Parallaxis2020Experience;
