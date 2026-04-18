import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UppercasedText from "../../components/text/UppercasedText";
import nemesisBanner from "../../assets/nemesis.jpg";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * NemesisExperience Component
 */
function NemesisExperience() {
	return (
		<div id="nemesis" className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Jan-Jul 2022"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<img
					src={nemesisBanner}
					alt="NEMESIS LOGO"
					className="rounded-md"
				/>
				<UppercasedText
					text={"Nemesis Automation"}
					bold={true}
					classes={"text-2xl inline-block mt-4"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Software Engineer"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<p className="mt-1 italic">NYC, New York</p>
				<div className="flex flex-row mt-2">
					<UnderlinedLink
						href="https://x.com/NemesisDotIO"
						className="mr-2"
					>
						[@NemesisDotIO]
					</UnderlinedLink>
					<UnderlinedLink
						href="https://opensea.io/collection/nemesis-bot"
						className="mr-2"
					>
						[Opensea]
					</UnderlinedLink>
				</div>
				<div className="flex flex-row mt-2">
					<a
						href="https://x.com/NemesisDotIO"
						className="fab mr-2"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={["fab", "twitter"]}
							className="fontawesome"
						/>
					</a>
					<a
						href="https://github.com/ChineseNFTFactory"
						className="fab mr-2"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={["fab", "github"]}
							className="fontawesome"
						/>
					</a>
				</div>
				<div className="mt-4">
					<p>
						The third founding SWE{" "}
						<UnderlinedLink href="https://x.com/NemesisDotIO">
							@NemesisDotIO
						</UnderlinedLink>
						. Drove revenue growth to over $350,000 ARR by shipping a
						Typescript/Electron desktop app that let our users bypass
						bot-protection to automatically snipe and resell in-demand
						Solana and Ethereum NFTs.
					</p>
				</div>
			</div>
		</div>
	);
}

export default NemesisExperience;
