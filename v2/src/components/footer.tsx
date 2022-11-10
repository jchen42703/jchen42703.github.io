import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/styles.scss";
import UppercasedText from "./text/UppercasedText";

const Footer = () => {
	return (
		<footer id="contact">
			<UppercasedText
				text={"Contact Me"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<p className="my-4">
				Contact me at jchen42703 "at" gmail "dot" com or at jxc1598 "at"
				case.edu.
			</p>
			<div className="flex flex-row justify-center w-[100%] gap-x-8">
				<a
					href="https://www.linkedin.com/in/joseph-chen2024"
					className="fab"
				>
					<FontAwesomeIcon
						icon={["fab", "linkedin"]}
						className="fontawesome"
					/>
				</a>
				<a href="https://github.com/jchen42703" className="fab">
					<FontAwesomeIcon
						icon={["fab", "github"]}
						className="fontawesome"
					/>
				</a>
				<a href="https://www.instagram.com/jchen___zz/" className="fab">
					<FontAwesomeIcon
						icon={["fab", "instagram"]}
						className="fontawesome"
					/>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
