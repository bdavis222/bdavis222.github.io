import Abstract from "./Abstract";

interface Props {
  title: string;
  journal: string;
  date: string;
  link: string;
  color: string;
  abstract: string;
  expanded: boolean;
}

function Publication({
  title,
  journal,
  date,
  link,
  color,
  abstract,
  expanded,
}: Props) {
  const showExpanded = expanded && abstract != "";
  return (
    <a className="invisible-link" href={link} target="_blank">
      <div className="publication-container">
        <div className={`publication-card ${color} ${expanded ? "" : "short"}`}>
          <div>
            <p className="publication-title">{title}</p>
            <p className="publication-journal">{journal}</p>
            <p className="publication-date">{date}</p>
            {showExpanded && <hr className="hr-on-publication-card" />}
          </div>
          {showExpanded && <Abstract fullText={abstract} />}
        </div>
      </div>
    </a>
  );
}

export default Publication;
