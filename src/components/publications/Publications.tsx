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
      <h1 style={{ marginBottom: 25 }}>{document.title}</h1>
      <PublicationList publications={[]} expanded={true} />
      <Footer />
    </>
  );
}

export default Publications;
