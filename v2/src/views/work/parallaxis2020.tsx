import UppercasedText from "../../components/text/UppercasedText";
import mouseMovementsGif from "../../assets/mouse_movements.gif";

/**
 * Parallaxis2020Experience Component
 */
function Parallaxis2020Experience() {
	return (
		<div id="parallaxis-ml" className="work-content-container">
			{/* Description with Timeline */}
			{/* Timeline */}
			<div className="col-span-1">
				<UppercasedText
					text={"May 2020-November 2020"}
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
					text={"Parallaxis LLC"}
					bold={true}
					classes={"text-2xl inline-block mt-4"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Machine Learning R&D Intern "}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<div className="mt-2">
					<p className="italic">
						TLDR: Business was booming, and the CEO brought me
						onboard to automate mouse movements for one of the APIs
						they were building and planning to monetize. Built a GAN
						to automate mouse movements, but it was too costly to
						run at the scale that the company needed. Ended up
						implementing and using a normal algorithimic Go mouse
						movement library with generated noise and preconfigured
						route "shapes." Learned a lot of valuable lessons during
						this internship.
					</p>
				</div>
				<UppercasedText
					text={"Story Time"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<div className="mt-2">WIP</div>
			</div>
		</div>
	);
}

export default Parallaxis2020Experience;
