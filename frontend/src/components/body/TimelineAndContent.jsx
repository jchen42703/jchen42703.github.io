import React from "react";

function TimelineYearContent({ year, yearExperiences }) {
  if (!yearExperiences) {
    return <p>Loading...</p>;
  }

  console.log("year exp: ", yearExperiences);
  return (
    <li id={`timeline_${year}`}>
      {yearExperiences.map((experience) => {
        const key = crypto.randomUUID();
        return (
          <div key={key}>
            <h2>{experience.title}</h2>
            {experience.points.map((point) => {
              const paragraphKey = crypto.randomUUID();
              return <p key={paragraphKey}>{point}</p>;
            })}
          </div>
        );
      })}
    </li>
  );
}

// function TimelineButton({ year, onClick }) {
//   return <button onClick={onClick}>{year}</button>;
// }

/**
 * Select buttons in this container
 */
function TimelineAndContent() {
  const contents = {
    2021: [
      {
        title: "Aug 2020-Dec 2021: Parallaxis LLC",
        img: "N/A",
        points: ["Placeholder", "Placeholder 2"],
      },
    ],
    2022: [
      {
        title: "Jan-July 2022: Nemesis Automation",
        img: "N/A",
        points: [
          "Increased revenue from $100,000 to over $200,000 by leading an Agile/Scrum team of 3 developers to rewrite the initial JavaScript/Electron prototype to a production-ready Typescript/TypeORM/SQL/Electron desktop application",
          "Boosted customer growth by 222% by leveraging customer feedback to prioritize and build in-demand features, such as supporting new trending marketplaces and making an all-in-one NFT/wallet manager for Ethereum, Solana, and NEAR.",
        ],
      },
    ],
  };

  const scrollToYear = (year) => {
    console.log("scroll to: ", year);
    const id = `timeline_${year}`;
    const infoContainer = document.getElementById(id);
    console.log("container: ", infoContainer);
    window.scrollTo({
      top: infoContainer.offsetTop,
      behavior: "smooth",
    });
  };

  const renderedContents = [];
  const timelineButtons = [];
  for (const [year, experience] of Object.entries(contents)) {
    console.log("experience: ", year, experience.points);
    renderedContents.push(
      <TimelineYearContent
        key={`timeline_${year}`}
        year={year}
        yearExperiences={experience}
      ></TimelineYearContent>
    );

    timelineButtons.push(
      <button key={year} onClick={() => scrollToYear(year)}>
        {year}
      </button>
    );
  }

  return (
    <React.Fragment>
      {/* Left Scrollable Container */}
      <div className="full-container">{timelineButtons}</div>
      <ul>{renderedContents}</ul>
    </React.Fragment>
  );
}

export default TimelineAndContent;
