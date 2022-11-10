import { useCycle } from "framer-motion";
import UppercasedText from "../../components/text/UppercasedText";
import MobileDrawer from "./MobileDrawer";
import { navFields } from "./navFields";

function NavigationMenu({ isMobile }: { isMobile: boolean }) {
	const [dispMobileMenu, cycleMenuOpen] = useCycle(false, true);

	const toggleMobileMenu = () => {
		cycleMenuOpen();
	};

	const renderLinksOnly = () => {
		const closeModalIfMobile = () => {
			if (isMobile) {
				cycleMenuOpen();
			}
		};

		return (
			<>
				{navFields.map(({ title, href, subFields }) => (
					<div key={title} className="flex flex-col">
						<UppercasedText
							text={title}
							href={href}
							bold={true}
							classes="text-lg"
							onClick={closeModalIfMobile}
						></UppercasedText>
						{subFields &&
							subFields.map((subField) => (
								<UppercasedText
									key={subField.title}
									text={subField.title}
									href={`${href}${subField.href}`}
									bold={true}
									classes="text-lg ml-10"
									onClick={closeModalIfMobile}
								></UppercasedText>
							))}
					</div>
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
