interface Props {
  title: string;
  journal: string;
  date: string;
  link: string;
}

function Publication({ title, journal, date, link }: Props) {
  let color: string;
  
  switch (journal) {
    case "Nature":
      color = "#F0FFF0"
      break;
    case "The Astrophysical Journal":
      color = "#E6E6FA";
      break;
    case "The Astronomical Journal":
      color = "#FFE4E1";
      break;
    case "Research Notes of the AAS":
      color = "#FFFFF0";
      break;
    case "The Pennsylvania State University":
      color = "#F0F8FF";
      break;
    default:
      color = "#F5F5F5";
      break;
  }
  
  return (
    <div className="publication-container">
      <a href={link} target="_blank">
        <div className="publication-card" style={{ backgroundColor: color }}>
          <p style={{ margin: 0, fontWeight: 800, fontSize: "medium" }}>
            {title}
          </p>
          <p style={{ margin: 0, fontStyle: "italic", fontSize: "medium" }}>
            {journal}
          </p>
          <p style={{ margin: 0, fontSize: "small" }}>{date}</p>
        </div>
      </a>
    </div>
  );
}

export default Publication;
