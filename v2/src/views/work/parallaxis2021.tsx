import UppercasedText from "../../components/text/UppercasedText";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * ParallaxisExperience Component
 */
function Parallaxis2021Experience() {
	return (
		<div id="parallaxis-swe" className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Jun-Dec 2021"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"Rattenfanger"}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Software Developer"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<p className="mt-1 italic">NYC, New York</p>
				<div className="flex flex-row mt-2">
					<UnderlinedLink
						href="https://x.com/RattenfangerIO"
						className="mr-2"
					>
						[@RattenfangerIO]
					</UnderlinedLink>
					<UnderlinedLink
						href="https://medium.com/@keimaoooo/rattenfanger-years-worth-of-reflection-519037496b5f"
						className="mr-2"
					>
						[Farewell Post]
					</UnderlinedLink>
				</div>
				<div className="mt-4">
					<p>
						Helped build a sneaker purchasing bot for Footlocker,
						Yeezys and Supreme{" "}
						<UnderlinedLink href="https://x.com/RattenfangerIO">
							@RattenfangerIO
						</UnderlinedLink>{" "}
						that drove over $2M ARR.
					</p>
					<ul className="list-items mt-2">
						<li>
							Built and integrated a Go library for integrating four
							captcha solving APIs for the main Go command line
							interface serving 1000+ monthly users.
						</li>
						<li>
							Updated the CLI's anti-bot protection bypasses to
							ensure consistent automatic purchasing speed across all
							providers.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Parallaxis2021Experience;
