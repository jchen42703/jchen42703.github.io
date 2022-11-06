function UppercasedText({
	text,
	href,
	underline = false,
	bold = false,
	classes = "",
}: {
	text: string;
	href?: string;
	underline?: boolean;
	bold?: boolean;
	classes?: string;
}) {
	let className = "uppercase";
	if (underline) {
		className = className + " underline";
	}

	if (bold) {
		className = className + " font-bold";
	}

	if (classes) {
		className = className + " " + classes;
	}

	if (href) {
		return (
			<a className={className} href={href}>
				{text}
			</a>
		);
	}
	return <span className={className}>{text}</span>;
}

export default UppercasedText;
