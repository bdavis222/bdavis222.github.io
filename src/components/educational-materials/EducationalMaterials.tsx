import DonateButton from "../DonateButton";
import Footer from "../Footer";
import EducationalCards from "./EducationalCards";

function EducationalMaterials() {
  const bannerImage = "assets/site-banner.png";
  document.title = "Educational Materials";

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
      <EducationalCards />
      <Footer />
    </>
  );
}

export default EducationalMaterials;
