import DonateButton from "../DonateButton";
import Footer from "../Footer";
import EducationalCards from "./EducationalCards";
import SoftwareCards from "./SoftwareCards";
import WebsiteCards from "./WebsiteCards";

function Projects() {
  const bannerImage = "assets/site-banner.png";
  document.title = "Projects";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <h1>{document.title}</h1>
      <DonateButton />
      <h2 style={{ marginLeft: 10 }}>Software</h2>
      <SoftwareCards />
      <h2 style={{ marginLeft: 10 }}>Websites</h2>
      <WebsiteCards />
      <h2 style={{ marginLeft: 10 }}>Educational Materials</h2>
      <EducationalCards />
      <Footer />
    </>
  );
}

export default Projects;
