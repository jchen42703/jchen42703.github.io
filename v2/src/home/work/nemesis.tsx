import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UppercasedText from "../../components/text/UppercasedText";
import nemesisBanner from "../../assets/nemesis.jpg";

/**
 * NemesisExperience Component
 */
function NemesisExperience() {
	return (
		<div id="nemesis" className="grid grid-cols-4 mt-8">
			{/* Description with Timeline */}
			{/* Timeline */}
			<div className="col-span-1">
				<UppercasedText
					text={"Jan-July 2022"}
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
					text={"Founding SWE #2"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<div className="flex flex-row">
					<a href="https://nemesisautomation.io/">
						[Official Website]
					</a>{" "}
					<a
						href="https://opensea.io/collection/nemesis-bot"
						className="mr-2"
					>
						[Opensea]
					</a>
				</div>
				<div className="flex flex-row mt-2">
					<a
						href="https://twitter.com/nemesisdotio?lang=en"
						className="fab mr-2"
					>
						<FontAwesomeIcon
							icon={["fab", "twitter"]}
							className="fontawesome"
						/>
					</a>
					<a
						href="https://github.com/ChineseNFTFactory"
						className="fab mr-2"
					>
						<FontAwesomeIcon
							icon={["fab", "github"]}
							className="fontawesome"
						/>
					</a>
				</div>

				<div className="mt-2">
					<p className="italic">
						TLDR: Joined a blockchain startup after they gained
						initial seed funding from users with a prototype and
						helped lead the rewrite, which massively grew the
						userbase and sales. Left due to burnout and money
						issues.
					</p>
				</div>
				<UppercasedText
					text={"The Story"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<div className="mt-2">
					<p>
						Wang (CTO) developed our initial prototype, v0,{" "}
						<b>in less than a month</b>, and alchemist (CEO), was
						able to generate enough hype for us to secure ~$100k in
						initial funding. Although our prototype was known to
						work well when it needed to, it had many bugs that made
						the UX annoying long-term. Many of the bugs were not
						easily "fixable" due to how rushed and sloppy the code
						was. Hence, alchemist brought me on-board for developing
						our rewrite, Nemesis v1, with the mindeset of{" "}
						<b>stability</b> and <b>reliability</b>. I designed and
						implemented the core Typescript framework for our main
						desktop application with this in mind. I had to learn
						really fast to get an adequate understanding of the
						ecosystem and the existing options because I didn't have
						much prior experience with blockchain or Typescript
						(besides a few meetups and tutorials).
					</p>
					<br />
					<p>
						Afterwards, I was primarily responsible for adding
						Solana NFT automatic minting and sniping, such as
						supporting Magic Eden, CoralCube, custom drops, etc.
						When we released Nemesis v1, we were able to put
						ourselves in another tier compared to our competition
						thanks to our modern UI and multiple blockchains and
						custom drop support!
					</p>
					<br />
					<p>
						The other two developers,{" "}
						<a href="wang@nemesisautomation.io">Wang</a> and Rimas
						were busy working on contracted collaborations (up to
						$150,000 in revenue). As a result, after the initial
						release, I was in-charge of maintaining and improving
						Nemesis v1 (besides certain Ethereum aspects).{" "}
						<b>
							That meant: fix bugs, close customer tickets, and
							push out in-demand features.
						</b>{" "}
						Because of my daily conversations with customers and our
						customer support staff, I was able to spot key issues
						and gaps with our application quickly. I pushed out
						automatic Solana NFT purchasing updates and helped our
						users buy hyped NFTs and secure over tens of thousands
						of dollars in profits. Furthermore, I pushed out
						features to improve the user experience, such as an RPC
						tester, multi-chain NFT manager, and NFT autolister.
					</p>
					<br />
					<p>
						Thanks to the momentum from v1, new features, and
						alchemist's great marketing endeavors, we were able to{" "}
						<b>double our userbase</b> over the 3-4 months after our
						v1 release!
					</p>
				</div>
			</div>
		</div>
	);
}

export default NemesisExperience;
