import Publication from "./Publication";

interface Props {
  publications: {
    title: string;
    journal: string;
    date: string;
    link: string;
    abstract: string;
  }[];
}

function PublicationList({ publications }: Props) {
  const colors = ["green", "purple", "yellow"]; // "blue" and "red" are other options
  let publicationList: {}[] = [];
  publications.forEach((publication, index) => {
    const abstract =
      publication["abstract"] != "" ? publication["abstract"] : "";
    publicationList.push(
      <Publication
        title={publication["title"]}
        journal={publication["journal"]}
        date={publication["date"]}
        link={publication["link"]}
        color={colors[index % colors.length]}
        abstract={abstract}
      />
    );
  });

  return <>{publicationList}</>;
}

export default PublicationList;
