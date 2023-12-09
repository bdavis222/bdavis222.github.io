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
      color = "#d8e6d8"
      break;
    case "The Astrophysical Journal":
      color = "#e6e6fA";
      break;
    case "The Astronomical Journal":
      color = "#ffe4e1";
      break;
    case "Research Notes of the AAS":
      color = "#ffefd5";
      break;
    case "The Pennsylvania State University":
      color = "d8dfe6";
      break;
    default:
      color = "#f5f5f5";
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
