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
					text={"Founding SWE #3"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<div className="flex flex-row">
					<UnderlinedLink
						href="https://nemesisautomation.io/"
						className="mr-2"
					>
						[Official Website]
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
						href="https://twitter.com/nemesisdotio?lang=en"
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

				<div className="mt-2">
					<p className="italic">
						TLDR: While going to school full-time, I joined a
						blockchain startup after they gained initial seed
						funding from users with a prototype and lead the rewrite
						for the official release, which massively grew the
						userbase and sales. Learned tons about building desktop
						applications, Svelte, and of course, blockchain! Left
						due to burnout and losing faith in the NFT industry.
					</p>
				</div>

				<UppercasedText
					text={"Tech Stack"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<br />
				<ul className="list-items mt-2">
					<li>
						Nemesis v1:
						Javascript/Typescript/Svelte/Tailwind/Electron
						(web3.js/ethers.js)
					</li>
					<li>DevOps: GitHub Actions, Lerna, Verdaccio</li>
					<li>Reverse Engineering: Charles Proxy, Insomnia</li>
					<li>Misc. APIs: Go, Typescript, Express</li>
				</ul>

				<UppercasedText
					text={"Specific Tech Problems Solved Not On My Resume"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<br />
				<ul className="list-items mt-2">
					<li>
						Custom home-grown HTTP library could not be unit-tested,
						so I built a CLI in Typescript to make end-to-end
						testing common request flows seamless.
					</li>
					<li>
						Architected the core JS/TS framework that made creating
						runnable/cancellable minting/sniping tasks across
						multiple blockchains easy.
					</li>
					<li>
						Built the majority of the Solana NFT minting and sniping
						code from the ground-up.
					</li>
					<li>
						Amended and integrated an existing Svelte list
						virtualization library and incremental task starts to
						increase the max number of tasks that could be
						concurrently run from ~50-60 to over 300.
					</li>
				</ul>
				<UppercasedText
					text={"The Start"}
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
						The other two developers, Wang and Rimas were busy
						working on contracted collaborations (up to $150,000 in
						revenue). As a result, after the initial release, I was
						in-charge of maintaining and improving Nemesis v1
						(besides certain Ethereum aspects).{" "}
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

					<br />
					<UppercasedText
						text={"The End?"}
						bold={true}
						classes={"text-1xl inline-block mt-2"}
					></UppercasedText>
					<p>
						Unfortunately, crypto started crashing hard near
						June-July 2022. Our revenue was in ETH, so when ETH
						fell, our monthly revenue also tanked over 60%. As a
						result, alchemist and I decided to take steps back to
						allow the other two SWEs, Wang and Rimas, to take most
						of the income because they actually needed the money. It
						was also partially because we were burnt out from the
						rewrite sprint and the following months maintaining the
						application. Also, Nemesis v1 didn't need much
						maintenance anymore. That meant that alchemist and I
						could take steps back without having to worry about the
						main product.
					</p>
					<br />
					<p>
						Alchemist actually ended up diving back into Nemesis in
						Fall 2022 and is expanding the brand. On the other hand,
						I now applying and actively looking for internship and
						job opportunities to grow my skillset in machine
						learning and/or working with applications at scale!
					</p>

					<br />
					<UppercasedText
						text={"Lessons Learned"}
						bold={true}
						classes={"text-1xl inline-block mt-2"}
					></UppercasedText>
					<br />
					<p>
						This experience was an amazing (spontaneous)
						opportunity. It was an absolutely unforgettable
						experience being so successful, while being under so
						much pressure and time crunch. Nevertheless, I learned
						some key lessons that I will also never forget.
					</p>
					<ul>
						<li>
							<b>
								Don't be scared to ask for help when you need
								it. Seriously.
							</b>{" "}
							It sounds like common sense, but I was struggling a
							lot when I first joined. I had very limited
							experience in blockchain dapp development, no
							experience in desktop application development, and
							was tasked with a mountain of responsibility. I was
							also going to school full-time and taking some
							graduate level courses. As a result, it dramatically
							delayed our release (nearly a month delay).
							Initially, when I asked for help, I never really had
							a good understanding of what the other person said
							until weeks later. I could have dramatically sped up
							my learning process if I did more pair programming
							with Wang (the one who wrote the prototype) and took
							better notes. Although we still released in time to
							be wildly successful for Okay Bears (the start of
							"Solana Summer"), we still missed the best timing
							for automatic Ethereum minting and sniping and a
							month of revenue when ETH was high (3k+). This is a
							lesson I won't forget.
						</li>
						<li>
							<b>Don't get greedy with pricing.</b> Okay, this one
							wasn't necessarily anyone's fault. Initially, we
							priced the bot very high in-line with when ETH
							minting was very hot. However, most competitors were
							reducing prices due to foreseeing the drop in crypto
							prices. We didn't follow the trend. As a result, it
							greatly hindered our initial growth. Although, we
							were able to secure 100+ users paying an initial fee
							of approximately $2500, we could have garnered a
							much larger userbase if we priced everything lower
							(near $1200). This lesson sounds like common sense,
							but{" "}
							<b>
								once the prices were set, we couldn't lower them
								anymore with a good conscience.
							</b>{" "}
							Otherwise, it would have been unfair to those who
							initially bought our product when it was priced
							high.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default NemesisExperience;
