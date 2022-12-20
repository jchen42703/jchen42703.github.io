import { motion, Variants } from "framer-motion";
import UppercasedText from "../../components/text/UppercasedText";
import UnderlinedLink from "../../components/UnderlinedLink";
import Welcome from "../../components/Welcome";

/**
 * Project Experience Component
 */
function ProjectExperience() {
	const textVariants: Variants[] = [
		{
			hidden: { x: "200%" },
			show: { x: 0 },
		},
	];

	return (
		<div id="projects">
			<Welcome>
				{["Projects"].map((text, i) => (
					<motion.div
						key={text}
						variants={textVariants[i]}
						transition={{
							ease: "anticipate",
							duration: 1.5,
						}}
					>
						<UppercasedText
							text={text}
							bold={true}
							classes="text-5xl md:text-7xl"
						></UppercasedText>
					</motion.div>
				))}
			</Welcome>
			<div className="content-container-no-top">
				<UppercasedText
					text={"About"}
					bold={true}
					classes={"text-3xl"}
				></UppercasedText>
				<p className="mt-4">
					Hi! Here's a project showcase of all of my open source
					projects over the past five years! I divided them up into
					the following categories to make navigation easier:
				</p>
				<ul>
					<li>
						<UnderlinedLink href="/projects/applied-ml">
							Applied ML
						</UnderlinedLink>
					</li>
					<li>
						<UnderlinedLink href="/projects/web-dev">
							Web Development
						</UnderlinedLink>
					</li>
					<li>
						<UnderlinedLink href="/projects/kaggle">
							Kaggle
						</UnderlinedLink>
					</li>
				</ul>
				<p>
					You can find my GitHub profile{" "}
					<UnderlinedLink href="https://github.com/jchen42703">
						here
					</UnderlinedLink>
					. Currently, I'm working on contributing to{" "}
					<UnderlinedLink href="https://github.com/cockroachdb/cockroach/">
						CockroachDB
					</UnderlinedLink>{" "}
					and{" "}
					<UnderlinedLink href="https://github.com/ory/">
						Ory
					</UnderlinedLink>
					. I'm also building a{" "}
					<UnderlinedLink href="https://github.com/jchen42703/create-fullstack">
						CLI
					</UnderlinedLink>{" "}
					to make generating production-grade code starter templates
					for frontend, backend, and Docker Compose/Kubernetes
					deployments easier and building a fullstack web app for
					making novel translation easier called{" "}
					<UnderlinedLink href="https://github.com/EasierMTL">
						EasierMTL.
					</UnderlinedLink>
				</p>
			</div>
		</div>
	);
}

export default ProjectExperience;
