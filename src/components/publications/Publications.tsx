import Footer from "../Footer";
import PublicationList from "./PublicationList";

function Publications() {
  const bannerImage = "assets/site-banner.png";
  document.title = "Publications";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);
  return (
    <>
      <h1 style={{ marginBottom: 20 }}>{document.title}</h1>
      <PublicationList
        publications={[
          {
            title: "Late-stage Evolution of Low- and Intermediate-mass Stars",
            journal: "The Pennsylvania State University",
            date: "May 2022",
            link: "https://etda.libraries.psu.edu/files/final_submissions/25432",
          },
          {
            title:
              "Yellow Post-asymptotic-giant-branch Stars as Standard Candles. I. Calibration of the Luminosity Function in Galactic Globular Clusters",
            journal: "The Astrophysical Journal",
            date: "May 2022",
            link: "https://iopscience.iop.org/article/10.3847/1538-4357/ac674d",
          },
          {
            title:
              "Spectroscopic Confirmation of Two Luminous Post-AGB Stars in the Globular Cluster M19",
            journal: "The Astronomical Journal",
            date: "Apr 2022",
            link: "https://arxiv.org/abs/2204.07206",
          },
          {
            title: "A Census of AHB Stars in Galactic Globular Clusters",
            journal: "The Astrophysical Journal",
            date: "Feb 2022",
            link: "https://iopscience.iop.org/article/10.3847/1538-4357/ac4224",
          },
          {
            title:
              "Toward Precision Cosmology With Improved PNLF Distances Using VLT-MUSE I. Methodology and Tests",
            journal: "The Astrophysical Journal",
            date: "Jul 2021",
            link: "https://iopscience.iop.org/article/10.3847/1538-4357/ac02ca",
          },
          {
            title:
              "Two Luminous Post-AGB Stars in the Galactic Globular Cluster M19",
            journal: "The Astronomical Journal",
            date: "Feb 2021",
            link: "https://iopscience.iop.org/article/10.3847/1538-3881/abdbb3",
          },
          {
            title:
              "Hubble Space Telescope Spectroscopy of a Planetary Nebula in an M31 Open Cluster: Hot-bottom Burning at 3.4 M⊙",
            journal: "The Astrophysical Journal",
            date: "Oct 2019",
            link: "https://iopscience.iop.org/article/10.3847/1538-4357/ab44d4",
          },
          {
            title: "A Recurrent Nova Super-Remnant in the Andromeda Galaxy",
            journal: "Nature",
            date: "Jan 2019",
            link: "https://www.nature.com/articles/s41586-018-0825-4.epdf?author_access_token=Efv4kYyb8NweZ1W1tYmiYdRgN0jAjWel9jnR3ZoTv0N8qBJDnwa59hGY4PDdFI5yg_gnOrjBQgwM9FCrVQsuZahhXf1Qwl_lZHr5DDGM34vvvO_OQYNvo7VsvJMiCWIlCU1wcJOxs7-ZwFTtSFhguQ%3D%3D",
          },
          {
            title:
              "The True Luminosities of Planetary Nebulae in M31’s Bulge: Massive Central Stars from an Old Stellar Population",
            journal: "The Astrophysical Journal",
            date: "Aug 2018",
            link: "https://iopscience.iop.org/article/10.3847/1538-4357/aad3c4",
          },
          {
            title:
              "The Keck/OSIRIS Nearby AGN Survey (KONA) I. The Nuclear K-band Properties of Nearby AGN",
            journal: "The Astrophysical Journal",
            date: "May 2018",
            link: "https://iopscience.iop.org/article/10.3847/1538-4357/aab9ad/meta",
          },
          {
            title:
              "The Planetary Nebula Luminosity Function (PNLF): Contamination from Supernova Remnants",
            journal: "Research Notes of the AAS",
            date: "Feb 2018",
            link: "https://iopscience.iop.org/article/10.3847/2515-5172/aab045",
          },
          {
            title:
              "The Recurrent Nova Candidate M31N 1966-08a = 1968-10c is a Galactic Flare Star",
            journal: "Research Notes of the AAS",
            date: "Dec 2017",
            link: "https://iopscience.iop.org/article/10.3847/2515-5172/aaa086/meta",
          },
        ]}
      />
      <Footer />
    </>
  );
}

export default Publications;
