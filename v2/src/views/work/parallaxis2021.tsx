import UppercasedText from "../../components/text/UppercasedText";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * ParallaxisExperience Component
 */
function Parallaxis2021Experience() {
	return (
		<div id="parallaxis-swe" className="work-content-container">
			{/* Description with Timeline */}
			{/* Timeline */}
			<div className="col-span-1">
				<UppercasedText
					text={"Jun-Dec 2021"}
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
						development due to developers leaving. This is where I
						got better at Go and web reverse engineering. Learned a
						lot about how modern anti-bot practices work and Fastly
						caching. Buutttt business eventually went under due
						being unable to get enough traction when the rewrite was
						done (╥_╥).
					</p>
				</div>
				<UppercasedText
					text={"Tech Stack"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<br />
				<ul className="list-items">
					<li>
						<b>Mobile Dev: </b> Vue, Ionic, Javascript, Express,
						MongoDB, Redis, Docker
					</li>
					<li>
						<b>Misc. Utility APIs: </b>Javascript, Fastify
					</li>
					<li>
						<b>CLI:</b> Go
					</li>
					<li>
						<b>Reverse Engineering: </b> Charles Proxy, Burp, Chrome
						DevTools, The Internet
					</li>
					<li>
						<b>DevOps:</b> GitHub Actions, Digital Ocean/AWS
					</li>
					<li>
						<b>Farewell Medium Post: </b>
						<UnderlinedLink href="https://medium.com/@keimaoooo/rattenfanger-years-worth-of-reflection-519037496b5f">
							Rattenfanger: Years Worth of Reflection
						</UnderlinedLink>
					</li>{" "}
				</ul>
				<UppercasedText
					text={"What I'd Did"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<br />
				<ul className="list-items">
					<li>
						Initially, worked on a Vue/Ionic mobile shoe inventory
						app they had as a side project. It was eventually
						shelved as the core product rewrite was slow.
					</li>
					<li>
						I was then moved to work on the core Go CLI to automate
						shoes purchases on websites, such as Footlocker,
						ChampsSports and YeezySupply.
					</li>
					<li>
						Did lots of reverse engineering to automate request and
						cookie flows and implemented
						Cloudflare/Queue-it/DataDome anti-bot and Fastly cache
						bypasses.
					</li>
					<li>
						Improved developer productivity and eliminated over 80%
						of manual work by deploying a CI/CD pipeline with GitHub
						Actions and Linux to automatically ship a versioned
						build of the CLI to users and Q&A.
					</li>
					<li>
						Created a Go library for integrating four captcha
						solving APIs to send HTTPS requests and RabbitMQ (only
						for AYCD) messages to enable users to purchase shoes at
						scale without being detected by captcha.
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Parallaxis2021Experience;
