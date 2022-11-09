import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import UppercasedText from "../../components/text/UppercasedText";
import { mediaQueries } from "../../services/mediaQueries";
import NavigationMenu from "../../components/nav/NavigationMenu";

/**
 * Welcome and Navigation Component
 */
function Welcome() {
	const isMobile = useMediaQuery({
		query: mediaQueries.limitToMobile,
	});

	const noLinkFields = ["Joseph Chen", "NYC, NY", "CS 3rd Year @ CWRU"];

	const variants = {
		hidden: { y: "-100%" },
		show: {
			y: 0,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.3,
			},
		},
	};

	const textVariants = [
		{
			hidden: { y: "-100%" },
			show: { y: 0 },
		},
		{
			hidden: { y: "-400%" },
			show: { y: 0 },
		},
		{
			hidden: { x: "200%" },
			show: { x: 0 },
		},
	];

	// Responsively renders the top components (basic info + nav menu)
	const renderTop = () => {
		if (isMobile) {
			return (
				<div className="flex flex-row justify-between">
					<div className="flex flex-col">
						{noLinkFields.map((text) => (
							<UppercasedText
								key={text}
								text={text}
								bold={true}
								classes="text-lg"
							></UppercasedText>
						))}
					</div>
					<NavigationMenu isMobile={isMobile}></NavigationMenu>
				</div>
			);
		}

		return (
			<>
				<div className="col-span-1 flex flex-col">
					{noLinkFields.map((text) => (
						<UppercasedText
							key={text}
							text={text}
							bold={true}
							classes="text-lg"
						></UppercasedText>
					))}
				</div>
				<NavigationMenu isMobile={isMobile}></NavigationMenu>
			</>
		);
	};

	return (
		<div className="flex flex-col md:grid md:grid-cols-4 content-container gap-x-0.75">
			{renderTop()}

			<motion.div
				className="flex flex-col text-left mt-4 md:mt-0 md:col-span-2 md:text-right"
				variants={variants}
				initial="hidden"
				animate="show"
			>
				{["Undergrad", "&", "(Ex) Founding SWE"].map((text, i) => (
					<motion.div key={text} variants={textVariants[i]}>
						<UppercasedText
							text={text}
							bold={true}
							classes="text-7xl"
						></UppercasedText>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

export default Welcome;
