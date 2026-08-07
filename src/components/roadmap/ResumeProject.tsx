import React, { useState } from "react";

interface Props {
  title: string;
  difficulty: string;
  icons: string[];
  description: React.ReactNode;
}

function ResumeProject({ title, difficulty, icons, description }: Props) {
  const [expanded, setExpanded] = useState(false);
  const iconRow = icons.map((icon) => (
    <img className="icon" src={icon} alt="icon logo" />
  ));
  return (
    <>
      {expanded ? (
        <div className="company-card project">
          <h3
            onClick={() => setExpanded(false)}
            style={{ cursor: "pointer" }}
            className={`project-header ${difficulty}`}
          >
            {title}
          </h3>
          <p
            onClick={() => setExpanded(false)}
            style={{ cursor: "pointer" }}
            className="project-difficulty-expanded"
          >
            <i>{difficulty}</i>
          </p>
          {iconRow}
          <a onClick={() => setExpanded(false)}>
            <img
              className="close-icon"
              src="assets/close-icon.svg"
              alt="close icon"
              style={{ cursor: "pointer" }}
            ></img>
          </a>
          {description}
        </div>
      ) : (
        <div
          className="company-card project"
          style={{ paddingBottom: 14, cursor: "pointer" }}
          onClick={() => setExpanded(true)}
        >
          <h3
            className={`project-header ${difficulty}`}
            style={{ cursor: "pointer" }}
          >
            {title}
            <span
              className="project-difficulty-collapsed"
              style={{
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <i>{difficulty}</i>
            </span>
            <span className="icon-row-grouped">{iconRow}</span>
          </h3>
        </div>
      )}
    </>
  );
}

export default ResumeProject;
