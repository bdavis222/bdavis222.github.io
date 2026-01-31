import DonateButton from "./DonateButton";
import Footer from "./Footer";

interface Props {
  title: string;
  subtitle: string;
}

function ConstructionPage({ title, subtitle }: Props) {
  const bannerImage = "assets/construction-banner.png";
  document.title = title;

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);
  return (
    <>
      <h1 id="title">{document.title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <DonateButton link="https://www.paypal.com/donate/?hosted_button_id=687UCVASKKEPG" />
      <img src={bannerImage} className="page-banner" />
      <p>This page is currently under construction. Please check back soon!</p>
      <Footer />
    </>
  );
}

export default ConstructionPage;
