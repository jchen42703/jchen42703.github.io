import { useCycle } from "framer-motion";
import UppercasedText from "../../components/text/UppercasedText";
import MobileDrawer from "./MobileDrawer";
import { regLinkFields, workFields } from "./navFields";

function NavigationMenu({ isMobile }: { isMobile: boolean }) {
	const [dispMobileMenu, cycleMenuOpen] = useCycle(false, true);

	const toggleMobileMenu = () => {
		cycleMenuOpen();
		// console.log("toggle");
	};

	const renderLinksOnly = () => {
		return (
			<>
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
			</>
		);
	};

	// Handles rendering based on media queries
	const renderMenuLinksConditionally = () => {
		if (isMobile) {
			// Full Screen Mobile Menu
			return (
				<MobileDrawer
					isOpen={dispMobileMenu}
					toggleOpen={cycleMenuOpen}
				>
					<div className="flex flex-col">{renderLinksOnly()}</div>
				</MobileDrawer>
			);
		}

		return <>{renderLinksOnly()}</>;
	};

	return (
		<div className="col-span-1 flex flex-col">
			<UppercasedText
				text={"Menu"}
				bold={true}
				classes="underline md:no-underline text-lg"
				onClick={isMobile ? toggleMobileMenu : undefined}
			></UppercasedText>
			{/* Render different drop down if mobile */}
			{/* Render the original menu if bigger than mobile size */}
			<br></br>
			{renderMenuLinksConditionally()}
		</div>
	);
}

export default NavigationMenu;
