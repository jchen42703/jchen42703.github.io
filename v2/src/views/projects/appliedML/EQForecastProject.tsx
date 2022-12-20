import UppercasedText from "../../../components/text/UppercasedText";
import UnderlinedLink from "../../../components/UnderlinedLink";
import VideoGIF from "../../../components/video/videoGIF";
import eqForecastVid from "../../../assets/small_eq_damage_forecast.mp4";

/**
 * EQForecastProject Component
 */
function EQForecastProject() {
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
					text={"Earthquake Damage Forecasting"}
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
					Built ML models for forecasting earthquake damage and made a
					fullstack demo demonstrating how it works.
				</p>
				<ul>
					<li>
						<b>Code: </b>{" "}
						<UnderlinedLink href="https://github.com/jchen42703/earthquake_forecasting">
							jchen42703/earthquake_forecasting
						</UnderlinedLink>
					</li>
					<li>
						<b>Jupyter Notebooks (Model Dev & EDA): </b>{" "}
						<UnderlinedLink href="https://github.com/jchen42703/earthquake_forecasting/tree/main/notebooks">
							jchen42703/earthquake_forecasting/notebooks
						</UnderlinedLink>
					</li>
					<li>
						<b>Demo: </b>{" "}
						<UnderlinedLink href="https://earthquakedamageforecast.com/">
							https://earthquakedamageforecast.com/
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
						<b>Frontend:</b> React
					</li>
					<li>
						<b>Backend: </b> FastAPI
					</li>
					<li>
						<b>Model Development: </b> LightGBM, CatBoost
					</li>
					<li>
						<b>DevOps: </b> Docker, Docker-Compose, NGINX, Digital
						Ocean
					</li>
				</ul>
				<div className="flex flex-col justify-center items-center w-[100%] my-4">
					<VideoGIF src={eqForecastVid} className={""}></VideoGIF>
				</div>
			</div>
		</div>
	);
}

export default EQForecastProject;
