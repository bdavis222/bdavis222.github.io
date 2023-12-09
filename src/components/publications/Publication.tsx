interface Props {
  title: string;
  journal: string;
  date: string;
  link: string;
}

function Publication({ title, journal, date, link }: Props) {
  let journalName: string;
  
  switch (journal) {
    case "nature":
      journalName = "Nature"
      break;
    case "apj":
      journalName = "The Astrophysical Journal";
      break;
    case "aj":
      journalName = "The Astronomical Journal";
      break;
    case "rnaas":
      journalName = "Research Notes of the AAS";
      break;
    case "psu":
      journalName = "The Pennsylvania State University";
      break;
    default:
      journalName = "Unknown Journal";
      break;
  }
  
  return (
    <div className="publication-container">
      <a href={link} target="_blank">
        <div className={"publication-card " + props.journal}>
          <p style={{ margin: 0, fontWeight: 800, fontSize: "medium" }}>
            {title}
          </p>
          <p style={{ margin: 0, fontStyle: "italic", fontSize: "medium" }}>
            {journalName}
          </p>
          <p style={{ margin: 0, fontSize: "small" }}>{date}</p>
        </div>
      </a>
    </div>
  );
}

export default Publication;
