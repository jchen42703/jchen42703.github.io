import UppercasedText from "../components/text/UppercasedText";
import BlockchainExperience from "./work/blockchain";

/**
 * Work Experience Component
 */
function WorkExperience() {
	return (
		<div id="aboutme" className="content-container-no-top">
			<UppercasedText
				text={"Work / Research / Projects"}
				bold={true}
				classes={"text-3xl"}
			></UppercasedText>
			<br />
			<BlockchainExperience></BlockchainExperience>
		</div>
	);
}

export default WorkExperience;
