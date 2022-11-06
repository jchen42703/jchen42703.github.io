import UppercasedText from "../components/text/UppercasedText";

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
				Hi! I'm Joseph! Welcome to my personal website! Here, I try to
				humanize my project and work experiences and try to make it easy
				to navigate! If you want a TLDR, feel free to take a look at my
				resume{" "}
				<a
					href="https://github.com/jchen42703/resumes/blob/main/latest_generic.pdf"
					className="font-bold underline"
				>
					here
				</a>
				!
			</p>
		</div>
	);
}

export default AboutMe;
