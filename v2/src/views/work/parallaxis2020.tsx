import UppercasedText from "../../components/text/UppercasedText";
import mouseMovementsGif from "../../assets/mouse_movements.gif";
import UnderlinedLink from "../../components/UnderlinedLink";

/**
 * Parallaxis2020Experience Component
 */
function Parallaxis2020Experience() {
	return (
		<div id="parallaxis-ml" className="work-content-container">
			{/* Description with Timeline */}
			{/* Timeline */}
			<div className="col-span-1">
				<UppercasedText
					text={"May 2020-November 2020"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<img
					src={mouseMovementsGif}
					alt="mouse movements demo"
					className="rounded-md"
				/>
				<UppercasedText
					text={"Parallaxis LLC"}
					bold={true}
					classes={"text-2xl inline-block mt-4"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Machine Learning R&D Intern "}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<div className="mt-2">
					<p className="italic">
						TLDR: Business was booming, and the CEO brought me
						onboard to automate mouse movements for one of the APIs
						they were building and planning to monetize. Built a GAN
						to automate mouse movements, but it was too costly to
						run at the scale that the company needed. Ended up
						implementing and using a normal algorithimic Go mouse
						movement library with generated noise and preconfigured
						route "shapes." Learned a lot of valuable lessons during
						this internship. Code is open-sourced at{" "}
						<UnderlinedLink href="https://github.com/jchen42703/ai_mouse_movements">
							https://github.com/jchen42703/ai_mouse_movements
						</UnderlinedLink>
						.
					</p>
				</div>
				<UppercasedText
					text={"Tech Stack"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<br />
				<ul className="list-items mt-2">
					<li>
						<b>API:</b> Javascript, TensorFlowJS, Express
					</li>
					<li>
						<b>R&D:</b> Python, TensorFlow, Keras, Google
						Colaboratory
					</li>
					<li>
						Chose TensorFlow as my DL framework because at the time,
						it was the most stable framework for shipping deep
						learning models to production.
					</li>
				</ul>
				<UppercasedText
					text={"What I'd Did"}
					bold={true}
					classes={"text-1xl inline-block mt-2"}
				></UppercasedText>
				<br />
				<ul className="list-items mt-2">
					<li>
						Researched and developed generative adversarial neural
						networks to automatically generate human-like mouse
						movements using Google Colaboratory.
					</li>
					<li>
						Made a REST API to demonstrate how the usage may look in
						production.
					</li>
					<li>
						Learned to better breakdown a business problem to a
						technical solution.
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Parallaxis2020Experience;
