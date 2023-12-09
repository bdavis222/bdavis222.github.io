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
      color = "green"
      break;
    case "The Astrophysical Journal":
      color = "red";
      break;
    case "The Astronomical Journal":
      color = "orange";
      break;
    case "Research Notes of the AAS":
      color = "yellow";
      break;
    case "The Pennsylvania State University":
      color = "blue";
      break;
    default:
      color = "gray";
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
