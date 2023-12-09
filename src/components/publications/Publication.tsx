interface Props {
  title: string;
  journal: string;
  date: string;
  link: string;
}

function Publication({ title, journal, date, link }: Props) {
  const color = (function () {
    switch (journal) {
      case "Nature":
        return { "green" };
      case "The Astrophysical Journal":
        return { "red" };
      case "The Astronomical Journal":
        return { "orange" };
      case "Research Notes of the AAS":
        return { "yellow" };
      case "The Pennsylvania State University":
        return { "blue" };
    }
  })();
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
