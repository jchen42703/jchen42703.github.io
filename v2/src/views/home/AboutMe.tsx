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
				Hi, I'm Joseph. I started in deep learning research for medical
				diagnoses, then pivoted to software engineering to ship ML into
				real products. Today I'm CTO at Munch Insights, building
				ML-powered tools for the restaurant industry.
			</p>
			<br />
			<p>
				Outside of work, I cook, lift, and dance. Some of my favorite
				recipes live @{" "}
				<UnderlinedLink href="https://github.com/jchen42703/broke-college-student-recipes">
					broke-college-student-recipes
				</UnderlinedLink>
				.
			</p>
		</div>
	);
}

export default AboutMe;
