import PublicationList from "../publications/PublicationList";

function HomePublications() {
  return (
    <>
      <h2 style={{ marginBottom: 22 }}>Publications</h2>
      <PublicationList publications={[7, 8, 3, 6]} expanded={false} />
      <div style={{ textAlign: "center" }}>
        <a className="gray-link" href="/#/publications">
          View all
        </a>
      </div>
    </>
  );
}

export default HomePublications;
