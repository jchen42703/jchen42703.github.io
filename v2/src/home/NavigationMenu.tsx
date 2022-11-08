import UppercasedText from "../components/text/UppercasedText";

function NavigationMenu() {
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
			title: "<Parallaxis (SWE) />",
			href: "#parallaxis-swe",
		},
		{
			title: "<Parallaxis (ML) />",
			href: "#parallaxis-ml",
		},
		{
			title: "<Machine Learning Research />",
			href: "#machinelearning",
		},
		{
			title: "<Applied ML (Hobby) />",
			href: "#projects-mlops",
		},
	];

	return (
		<div className="col-span-1 flex flex-col">
			<UppercasedText
				text={"Menu"}
				bold={true}
				classes="text-lg"
			></UppercasedText>
			<br></br>
			{regLinkFields.map(({ title, href }) => (
				<UppercasedText
					key={title}
					text={title}
					href={href}
					bold={true}
					classes="text-lg"
				></UppercasedText>
			))}
			<br></br>

			<UppercasedText
				text={"Work & Research"}
				bold={true}
				classes="text-lg"
			></UppercasedText>
			<br></br>
			{workFields.map(({ title, href }) => (
				<UppercasedText
					key={title}
					text={title}
					href={href}
					bold={true}
					classes="text-lg"
				></UppercasedText>
			))}
		</div>
	);
}

export default NavigationMenu;
