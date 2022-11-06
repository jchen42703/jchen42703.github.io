import UppercasedText from "../components/text/UppercasedText";

/**
 * Welcome and Navigation Component
 */
function Welcome() {
	const noLinkFields = ["Joseph Chen", "NYC, NY", "CS 3rd Year @ CWRU"];

	const regLinkFields = [
		{
			title: "<About Me />",
			href: "#aboutme",
		},
		{
			title: "<Resume />",
			href: "https://github.com/jchen42703/resumes/blob/main/latest_generic.pdf",
		},
		{
			title: "<Contact Me />",
			href: "#contact",
		},
	];

	const workFields = [
		{
			title: "<Nemesis />",
			href: "#nemesis",
		},
		{
			title: "<Parallaxis LLC (SWE) />",
			href: "#parallaxis-swe",
		},
		{
			title: "<Parallaxis LLC (ML) />",
			href: "#parallaxis-ml",
		},
		{
			title: "<Machine Learning Research />",
			href: "#machinelearning",
		},
	];

	return (
		<div className="grid grid-cols-4 content-container gap-x-0.5">
			<div className="col-span-1 flex flex-col">
				{noLinkFields.map((text) => (
					<UppercasedText text={text} bold={true}></UppercasedText>
				))}
			</div>

			<div className="col-span-1 flex flex-col">
				<UppercasedText text={"Menu"} bold={true}></UppercasedText>
				<br></br>
				{regLinkFields.map(({ title, href }) => (
					<UppercasedText
						text={title}
						href={href}
						bold={true}
					></UppercasedText>
				))}
				<br></br>

				<UppercasedText
					text={"Work & Research"}
					bold={true}
				></UppercasedText>
				<br></br>
				{workFields.map(({ title, href }) => (
					<UppercasedText
						text={title}
						href={href}
						bold={true}
					></UppercasedText>
				))}
			</div>

			<div className="col-span-2 flex flex-col text-right">
				{["Undergrad", "&", "(Ex) Founding SWE"].map((text) => (
					<UppercasedText
						text={text}
						bold={true}
						classes={"text-6xl"}
					></UppercasedText>
				))}
			</div>
		</div>
	);
}

export default Welcome;
