interface Props {
  title: string;
  journal: string;
  date: string;
  link: string;
  color: string;
  abstract: string;
}

function Publication({ title, journal, date, link, color, abstract }: Props) {
  return (
    <div className="publication-container">
      <a href={link} target="_blank">
        <div className={`publication-card ${color}`}>
          <p className="publication-title">{title}</p>
          <p className="publication-journal">{journal}</p>
          <p className="publication-date">{date}</p>
          {abstract != "" && (
            <div style={{ paddingTop: 5 }}>
              <p className="publication-date">
                <b>Abstract:</b> {abstract}
              </p>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default Publication;
