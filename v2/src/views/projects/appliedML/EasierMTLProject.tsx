import UppercasedText from "../../../components/text/UppercasedText";
import UnderlinedLink from "../../../components/UnderlinedLink";

/**
 * EasierMTLProject Component
 */
function EasierMTLProject() {
	return (
		<div id="lyne" className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Spring 2022"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"Lyne"}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Sophomore Year of College"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<p>
					Built a fullstack web app for helping businesses and clinics
					manage lines of people with a ticket system with a team of
					6. It was my first time leading a large team to deploy a
					fullstack application end-to-end.
				</p>
				<ul>
					<li>
						<b>Code: </b>{" "}
						<UnderlinedLink href="https://github.com/jchen42703/waiting-line-app">
							jchen42703/waiting-line-app
						</UnderlinedLink>
					</li>
					<li>
						<b>Meeting and Design Docs: </b>{" "}
						<UnderlinedLink href="https://github.com/jchen42703/waiting-line-app/tree/main/docs">
							jchen42703/waiting-line-app/docs
						</UnderlinedLink>
					</li>
					<li>
						<b>
							All Documentation (SRS, Design Docs, Presentation):{" "}
						</b>{" "}
						<UnderlinedLink href="https://drive.google.com/drive/folders/1kE0y-kemQI49irKUppbNU1oIWXYcNU4m?usp=share_link">
							CSDS 393
						</UnderlinedLink>
					</li>
				</ul>
				<UppercasedText
					text={"Tech Stack"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<br />
				<ul className="list-items mt-2">
					<li>
						<b>Frontend:</b> React, Typescript, TailwindCSS,
						ChakraUI, SCSS
					</li>
					<li>
						<b>Backend:</b> Express, Typescript, MongoDB
					</li>
					<li>
						<b>DevOps: </b> Docker, Lerna, NGINX, Digital Ocean
					</li>
					<li>
						<b>Management: </b> Jira, GitHub
					</li>
				</ul>
				<UppercasedText
					text={"What I Did"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<br />
				<ul className="list-items mt-2">
					<li>
						Led meetings, reviewed code, led pair programming
						sessions to onboard members not familiar with our stack,
						and set code and GitOps standards.
					</li>
					<li>
						Wrote React dashboards for managing users in line and
						creating/deleting queues.
					</li>
					<li>
						Wrote Express endpoints for social sign-in for
						Google/Facebook and for user/queue management.
					</li>
					<li>
						Deployed the application with Docker and NGINX to a
						Digital Ocean instance. (Is currently shutdown because
						I'm broke ☹)
					</li>
				</ul>
			</div>
		</div>
	);
}

export default EasierMTLProject;
