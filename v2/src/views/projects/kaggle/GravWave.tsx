import UppercasedText from "../../../components/text/UppercasedText";
import UnderlinedLink from "../../../components/UnderlinedLink";
import gravWave from "../../../assets/gravitational_wave.png";

/**
 * GravWave Component
 */
function GravWave() {
	return (
		<div className="work-content-container">
			<div className="col-span-1">
				<UppercasedText
					text={"Fall 2021"}
					bold={true}
					classes={"text-2xl"}
				></UppercasedText>
			</div>
			<div className="col-span-3">
				<UppercasedText
					text={"Gravitational Wave Detection"}
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
					Worked in a team of 4 to build a deep learning pipeline to
					automatically detect gravitational waves in simulated data.
					The experiments were done on the Case Western Reserve
					University slurm Cluster.
				</p>
				<ul>
					<li>
						<b>Code: </b>
						<UnderlinedLink href="https://github.com/jchen42703/g2net_ml_dl">
							jchen42703/g2net_ml_dl
						</UnderlinedLink>
					</li>
					<li>
						<b>Notebooks: </b>
						<UnderlinedLink href="https://github.com/jchen42703/g2net_ml_dl/tree/main/notebooks">
							jchen42703/g2net_ml_dl/notebooks
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
						<b>Model Development: </b> Python, PyTorch
					</li>
				</ul>
				<div className="flex flex-col justify-center items-center w-[100%] my-4">
					<img src={gravWave} alt="" />
				</div>
			</div>
		</div>
	);
}

export default GravWave;
