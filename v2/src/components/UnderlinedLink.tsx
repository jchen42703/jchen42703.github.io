/**
 * Simple underlined anchor link element with customizable css to reduce code duplication.
 */
function UnderlinedLink({
	text,
	href,
	className = "",
}: {
	text: string;
	href: string;
	className?: string;
}) {
	// Appends new className string
	if (!className.startsWith(" ")) {
		className = "underline " + className;
	} else {
		className = "underline" + className;
	}

	return (
		<a href={href} className={className}>
			{text}
		</a>
	);
}

export default UnderlinedLink;
