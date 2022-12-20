import UppercasedText from "../../../components/text/UppercasedText";
import UnderlinedLink from "../../../components/UnderlinedLink";
import VideoGIF from "../../../components/video/videoGIF";

/**
 * EasierMTLProject Component
 */
function EasierMTLProject() {
	return (
		<div className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Spring 2022-Now"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"EasierMTL"}
					bold={true}
					classes={"text-2xl inline-block"}
				></UppercasedText>
				<br />
				<UppercasedText
					text={"Current"}
					bold={true}
					classes={"text-1xl"}
				></UppercasedText>
				<br />
				<p>
					Built a fullstack web application for using a deep learning
					model to translate text. I reduced API latecy by 53% by
					quantizing the model. I also built a CLI to automatically
					deploy and load-test the API. Right now, the website just
					shows a demo of the model,{" "}
					<b>
						but I'm currently working on the complete novel
						translation platform.
					</b>{" "}
					You can find more specific information on the GitHub Table
					of Contents.
				</p>
				<ul>
					<li>
						<b>Code + Table Of Contents: </b>{" "}
						<UnderlinedLink href="https://github.com/EasierMTL/chinese-translation-app">
							EasierMTL/chinese-translation-app
						</UnderlinedLink>
					</li>
					<li>
						<b>Website: </b>{" "}
						<UnderlinedLink href="https://easiermtl.com/">
							https://easiermtl.com/
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
						<b>Frontend:</b> React, Next.js, Typescript,
						TailwindCSS, Draft.js (Migrating to Lexical soon)
					</li>
					<li>
						<b>Backend: </b> FastAPI
					</li>
					<li>
						<b>Model Development: </b> PyTorch, Hugging Face
					</li>
					<li>
						<b>Load Testing: </b> Terraform, Locust
					</li>
					<li>
						<b>DevOps: </b> Docker, Kubernetes (Google Cloud & GKE),
						NGINX
					</li>
				</ul>
				<div className="flex flex-col justify-center items-center w-[100%] my-4">
					<VideoGIF
						src={
							"https://user-images.githubusercontent.com/34604336/205464990-cbc08d4c-ee56-4e15-9704-5ab9ee27931f.mp4"
						}
						className={""}
					></VideoGIF>
				</div>
			</div>
		</div>
	);
}

export default EasierMTLProject;
