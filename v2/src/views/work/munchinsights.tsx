import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UppercasedText from "../../components/text/UppercasedText";
import munchExample from "../../assets/munch.png";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * MunchExperience Component
 */
function MunchExperience() {
	return (
		<div id="nemesis" className="work-content-container">
			{/* Description with Timeline */}
			{/* Timeline */}
			<div className="col-span-1">
				<UppercasedText
					text={"March 2023-Now"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<img
					src={munchExample}
					alt="Munch Example"
					className="rounded-md"
				/>
				<UppercasedText
					text={"Munch Insights"}
					bold={true}
					classes={"text-2xl inline-block mt-4"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"CTO"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<div className="flex flex-row">
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

                <p>Working on building the dream restaurant franchise analytics platform :)</p>
			</div>
		</div>
	);
}

export default MunchExperience;
