import React, { useState } from "react";
import SkillsAndContent from "./SkillsAndContent";
import TimelineAndContent from "./TimelineAndContent";

/**
 * Select components on left container to scroll on the right container.
 *
 * For example, timeline on left container and scroll to content for each year on the right.
 */
function BodyContainer() {
  const [dispSkills, setDispSkills] = useState(false);

  /* Conditionally render based on selected button option. */
  const renderBasedOnButtonState = () => {
    if (dispSkills) {
      return <SkillsAndContent></SkillsAndContent>;
    }

    return <TimelineAndContent></TimelineAndContent>;
  };

  return (
    <React.Fragment>
      {/* Buttons */}
      <div className="horizontal-buttons">
        <button onClick={() => setDispSkills(false)}>Experience</button>
        <button onClick={() => setDispSkills(true)}>Skills</button>
      </div>
      {renderBasedOnButtonState()}
    </React.Fragment>
  );
}

export default BodyContainer;
