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
          <h3 className={`project-header ${difficulty}`}>{title}</h3>
          <p className="project-difficulty">
            <i>{difficulty}</i>
          </p>
          {iconRow}
          <a onClick={() => setExpanded(false)}>
            <img
              className="close-icon"
              src="assets/close-icon.svg"
              alt="close icon"
            ></img>
          </a>
          {description}
        </div>
      ) : (
        <div
          className="company-card project"
          style={{ paddingBottom: 21 }}
          onClick={() => setExpanded(true)}
        >
          <h3 className={`project-header ${difficulty}`}>
            {title} <span>{iconRow}</span>
          </h3>
        </div>
      )}
    </>
  );
}

export default ResumeProject;
