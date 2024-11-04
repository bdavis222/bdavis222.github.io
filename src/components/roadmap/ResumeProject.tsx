import React from "react";

interface Props {
  title: string;
  difficulty: string;
  icons: string[];
  description: React.ReactNode;
}

function ResumeProject({ title, difficulty, icons, description }: Props) {
  return (
    <>
      <div className="company-card project">
        <h3 className="project-header">{title}</h3>
        <p className="project-difficulty">
          <i>{difficulty}</i>
        </p>
        {icons.map((icon) => (
          <img className="icon" src={icon} alt="icon logo" />
        ))}
        {description}
      </div>
    </>
  );
}

export default ResumeProject;
