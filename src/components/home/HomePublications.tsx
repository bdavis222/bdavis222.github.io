import PublicationList from "../publications/PublicationList";

function HomePublications() {
  return (
    <>
      <h2 style={{ marginBottom: 22 }}>Publications</h2>
      <PublicationList
        publications={[
          {
            title: "A Recurrent Nova Super-Remnant in the Andromeda Galaxy",
            journal: "Nature",
            date: "Jan 2019",
            link: "https://www.nature.com/articles/s41586-018-0825-4.epdf?author_access_token=Efv4kYyb8NweZ1W1tYmiYdRgN0jAjWel9jnR3ZoTv0N8qBJDnwa59hGY4PDdFI5yg_gnOrjBQgwM9FCrVQsuZahhXf1Qwl_lZHr5DDGM34vvvO_OQYNvo7VsvJMiCWIlCU1wcJOxs7-ZwFTtSFhguQ%3D%3D",
          },
          {
            title: "The True Luminosities of Planetary Nebulae in M31’s Bulge",
            journal: "The Astrophysical Journal",
            date: "Aug 2018",
            link: "https://iopscience.iop.org/article/10.3847/1538-4357/aad3c4",
          },
          {
            title: "A Census of AHB Stars in Galactic Globular Clusters",
            journal: "The Astrophysical Journal",
            date: "Feb 2022",
            link: "https://iopscience.iop.org/article/10.3847/1538-4357/ac4224",
          },
        ]}
      />
      <div style={{ textAlign: "center", fontSize: "small" }}>
        <a className="gray-link" href="/#/publications">
          View all
        </a>
      </div>
    </>
  );
}

export default HomePublications;
