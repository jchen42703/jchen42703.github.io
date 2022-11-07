import UppercasedText from "../../components/text/UppercasedText";

/**
 * ParallaxisExperience Component
 */
function Parallaxis2021Experience() {
	return (
		<div id="parallaxis-swe" className="grid grid-cols-4 mt-8">
			{/* Description with Timeline */}
			{/* Timeline */}
			<div className="col-span-1">
				<UppercasedText
					text={"Aug-Dec 2021"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"Parallaxis LLC"}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Software Developer (Part-Time)"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<div className="mt-2">
					<p className="italic">
						TLDR: Initially, worked on a shoe inventory tracking
						app, but was moved to the core automation software
						development due to developers leaving. Business
						eventually went under (╥_╥).
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

export default Parallaxis2021Experience;
