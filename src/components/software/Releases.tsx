import Cards from "./Cards";
import DonateButton from "../DonateButton";
import Footer from "../Footer";

function Releases() {
  const bannerImage = "assets/site-banner.png";
  document.title = "Software Releases";

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
      <Cards />
      <Footer />
    </>
  );
}

export default Releases;
