import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UppercasedText from "../../components/text/UppercasedText";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * MunchExperience Component
 */
function MunchExperience() {
	return (
		<div id="munch-insights" className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"March 2023-March 2026"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"Munch Insights"}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Technical Founder"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<p className="mt-1 italic">NYC, New York</p>
				<div className="flex flex-row mt-2">
					<UnderlinedLink
						href="https://munchinsights.com/"
						className="mr-2"
					>
						[Official Website]
					</UnderlinedLink>
				</div>
				<div className="flex flex-row mt-2">
					<a
						href="https://www.linkedin.com/company/munch-insights/"
						className="fab mr-2"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={["fab", "linkedin"]}
							className="fontawesome"
						/>
					</a>
					<a
						href="https://github.com/Munchpass"
						className="fab mr-2"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={["fab", "github"]}
							className="fontawesome"
						/>
					</a>
					<a
						href="https://www.instagram.com/munchinsights/"
						className="fab mr-2"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={["fab", "instagram"]}
							className="fontawesome"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default MunchExperience;
