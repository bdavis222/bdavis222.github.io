interface Props {
  title: string;
  journal: string;
  date: string;
  link: string;
  color: string;
}

function Publication({ title, journal, date, link, color }: Props) {
  return (
    <div className="publication-container">
      <a href={link} target="_blank">
        <div className={`publication-card ${color}`}>
          <p className="publication-title">{title}</p>
          <p className="publication-journal">{journal}</p>
          <p className="publication-date">{date}</p>
        </div>
      </a>
    </div>
  );
}

export default Publication;
