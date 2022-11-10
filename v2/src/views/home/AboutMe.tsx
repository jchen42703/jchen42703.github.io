import UppercasedText from "../../components/text/UppercasedText";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * About Me Component
 */
function AboutMe() {
	return (
		<div id="aboutme" className="content-container-no-top">
			<UppercasedText
				text={"About Me"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<p className="mt-4">
				Hi! I'm Joseph! Thank you for stopping by! Here, I try to
				humanize my project and work experiences and try to make it easy
				to navigate! If you want a TLDR, feel free to take a look at my
				resume{" "}
				<UnderlinedLink href="https://github.com/jchen42703/resumes/blob/main/latest_generic.pdf">
					here
				</UnderlinedLink>
				. Quick caveat: the linked resume excludes 3+ years of research
				experience prior to college to be concise, but that experience
				is on my LinkedIn and this website ¯\_(ツ)_/¯.
			</p>
			<br />
			<p>
				I first discovered my passion for computer science in high
				school when I did deep learning research for automatic medical
				diagnoses. However, after 3 years of research, I wanted to see
				the models I made actually being used by others in real
				software. I decided to pursue computer science with a software
				engineering focus in college to learn the skills necessary for
				writing quality software to integrate ML models in production.
			</p>
			<br />
			<p>
				{" "}
				That same desire also led me to seek opportunities to grow as a
				software engineer and researcher. At Parallaxis LLC, I worked as
				a machine learning R&D intern and developed a REST API for
				automatically generating mouse movements. Likewise, at Nemesis
				Automation, I grew my software engineering skills as a founding
				software engineer to design and create a desktop application for
				automatically purchasing Ethereum and Solana NFTs and managing
				blockchain wallets. Although I’ve enjoyed the process of
				building successful software to solve real-world issues at
				various companies, I didn’t have the opportunity to leverage my
				machine learning experience to meaningfully impact their
				operations. That’s why I’m currently looking for software
				engineering, machine learning, and MLOps opportunities to grow
				and generate value.
			</p>
			<br />
			<p>
				Besides SWE and research, I like to cook, work out and dance in
				my free time! I compiled some tasty and easy recipes @{" "}
				<UnderlinedLink href="https://github.com/jchen42703/broke-college-student-recipes">
					https://github.com/jchen42703/broke-college-student-recipes
				</UnderlinedLink>
				. Feel free to try them out and let me know what you think!
			</p>
		</div>
	);
}

export default AboutMe;
