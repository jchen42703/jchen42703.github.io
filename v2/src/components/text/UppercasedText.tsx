/**
 * Abstracts uppercased text, whether that be headers or links.
 *
 * For links, it implements a smooth scroll to the href if applicable.
 */
function UppercasedText({
	text,
	href,
	underline = false,
	bold = false,
	classes = "",
	onClick = undefined,
}: {
	text: string;
	href?: string;
	underline?: boolean;
	bold?: boolean;
	classes?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
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
		let scrollToLink:
			| React.MouseEventHandler<HTMLAnchorElement>
			| undefined = undefined;
		// Smoothly scroll to the div with anchor element (<a></a>)
		if (href.startsWith("#")) {
			scrollToLink = (e) => {
				e.preventDefault();
				const anchorElem = document.querySelector(href);
				if (!anchorElem) {
					console.error(`anchor element for ${href} not found`);
					return;
				}

				anchorElem.scrollIntoView({
					behavior: "smooth",
				});
			};
		}

		return (
			<a
				className={className}
				href={href}
				onClick={(e) => {
					if (scrollToLink) {
						scrollToLink(e);
					}

					if (onClick) {
						onClick(e);
					}
				}}
			>
				{text}
			</a>
		);
	}
	return (
		<span className={className} onClick={onClick}>
			{text}
		</span>
	);
}

export default UppercasedText;
