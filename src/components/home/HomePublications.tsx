import PublicationList from "../publications/PublicationList";

function HomePublications() {
  return (
    <>
      <h2 style={{ marginBottom: 22 }}>Publications</h2>
      <div className="publication-row">
        <PublicationList publications={[0, 8, 9, 4]} expanded={false} />
      </div>
      <div style={{ textAlign: "center" }}>
        <a className="gray-link" href="/#/publications">
          View all
        </a>
      </div>
    </>
  );
}

export default HomePublications;
