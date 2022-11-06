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
				! Quick caveat: it excludes 3+ years of research experience
				prior to college to be concise, but that experience is on my
				LinkedIn ¯\_(ツ)_/¯.
			</p>
			<br />
			<p>
				A little about me: I love to code in my free-time, whether that
				be implementing new business ideas or filling in my knowledge
				gaps! I started seriously coding in my sophomore of high school
				to do independent original machine learning research and won
				some awards at state competitions. I eventually got sick of the
				never-ending parameter tuning grind and horrendous
				reproducibility issues in ML research after 3 years. Ever since
				then, I've been dabbling in full-stack, desktop application, and
				CLI development. I've even been fortunate enough to be the
				founding SWE #2 of a small, successful startup!
			</p>
			<br />
			<p>
				Besides coding, I cook, work out and dance in my free time. I
				compiled some tasy and easy recipes @{" "}
				<a
					href="https://github.com/jchen42703/broke-college-student-recipes"
					className="font-bold underline"
				>
					https://github.com/jchen42703/broke-college-student-recipes
				</a>
				. Feel free to try them out and let me know what you think!
			</p>
		</div>
	);
}

export default AboutMe;
