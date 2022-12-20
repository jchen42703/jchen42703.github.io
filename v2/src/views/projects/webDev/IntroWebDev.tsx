import UppercasedText from "../../../components/text/UppercasedText";
import UnderlinedLink from "../../../components/UnderlinedLink";

/**
 * IntroWebDev Component
 */
function IntroWebDev() {
	return (
		<div className="content-container-no-top-half-bot">
			<UppercasedText
				text={"About"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<p className="mt-4">
				This section is dedicated to pure web development projects. Any
				of the web development projects that include machine learning
				are in the{" "}
				<UnderlinedLink href="/projects/applied-ml">
					Applied ML section
				</UnderlinedLink>
				. The showcased projects are:
			</p>
			<ul className="mt-4">
				<li>Lyne (React/Express/Typescript)</li>
				<li>
					Translator App with Google Translate's API
					(React/Redux/Express)
				</li>
				<li>Logos Church English Website (Pure HTML/SCSS)</li>
				<li>QHSS Cyber (Web Dev Club I Leaded)</li>
			</ul>
		</div>
	);
}

export default IntroWebDev;
