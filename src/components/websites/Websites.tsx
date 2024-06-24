import DonateButton from "../DonateButton";
import Footer from "../Footer";
import WebsiteCards from "./WebsiteCards";

function Websites() {
  const bannerImage = "assets/site-banner.png";
  document.title = "Websites";

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
      <WebsiteCards />
      <Footer />
    </>
  );
}

export default Websites;
