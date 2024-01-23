import Abstract from "./Abstract";

interface Props {
  title: string;
  journal: string;
  date: string;
  link: string;
  color: string;
  abstract: string;
}

function Publication({ title, journal, date, link, color, abstract }: Props) {
  const expanded = abstract != "";
  return (
    <div className="publication-container">
      <div className={`publication-card ${color}`}>
        <div>
          <a className="normal-link-on-card" href={link} target="_blank">
            <p className="publication-title">{title}</p>
            <p className="publication-journal">{journal}</p>
            <p className="publication-date">{date}</p>
            {expanded && <hr className="hr-on-publication-card" />}
          </a>
        </div>
        {expanded && <Abstract fullText={abstract} />}
      </div>
    </div>
  );
}

export default Publication;
