interface Props {
  name: string;
  jobTitle: string;
  dates: string;
  icon: string;
}

function CompanyInfo({ name, jobTitle, dates, icon }: Props) {
  return (
    <div className="company-container">
      <div className="company-image-container">
        <img className="company-image" src={icon} alt="Company logo" />
      </div>
      <div>
        <p className="company-name">{name}</p>
        <p className="company-job-title">{jobTitle}</p>
        <p className="company-dates">{dates}</p>
      </div>
    </div>
  );
}

export default CompanyInfo;
