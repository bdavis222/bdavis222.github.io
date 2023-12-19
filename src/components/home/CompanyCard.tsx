import CompanyInfo from "./CompanyInfo";
import CompanySkills from "./CompanySkills";

interface Props {
  name: string;
  jobTitle: string;
  dates: string;
  icon: string;
  accomplishments: JSX.Element[];
  skills: string[];
}

function CompanyCard({
  name,
  jobTitle,
  dates,
  icon,
  accomplishments,
  skills,
}: Props) {
  const accomplishmentsList = [];
  accomplishments.forEach((accomplishment) => {
    accomplishmentsList.push(<li>{accomplishment}</li>);
  });
  return (
    <div className="company-card">
      <CompanyInfo name={name} jobTitle={jobTitle} dates={dates} icon={icon} />
      <ul className="company-achievements">
        {accomplishments.map((accomplishment, index) => (
          <li key={index}>{accomplishment}</li>
        ))}
      </ul>
      <CompanySkills skills={skills} />
    </div>
  );
}

export default CompanyCard;
