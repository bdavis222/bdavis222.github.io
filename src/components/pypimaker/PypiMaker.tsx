import DonateButton from "../DonateButton";
import Footer from "../Footer";
import Changing from "./Changing";
import Generating from "./Generating";
import StartingPypiMaker from "./StartingPypiMaker";
import Resetting from "./Resetting";
import Uploading from "./Uploading";

function PypiMaker() {
  const bannerImage = "assets/pypimaker.png";
  document.title = "PyPI Maker";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <h1>{document.title}</h1>
      <h2 className="subtitle">Simplifying PyPI setup and management</h2>
      <DonateButton link="https://www.paypal.com/donate/?hosted_button_id=687UCVASKKEPG" />
      <img src={bannerImage} className="page-banner" />
      <p>
        PyPI Maker is designed to simplify uploading and managing Python
        packages on the Python Package Index (PyPI). The program runs entirely
        within a window-based graphical user interface, so as to not require
        from the user any knowledge of the otherwise rather lengthy and tedious
        process involved in uploading and managing a package on PyPI.
      </p>
      <p>Donations are appreciated, but not required.</p>
      <StartingPypiMaker />
      <Generating />
      <Uploading />
      <Resetting />
      <Changing />
      <h2>Development</h2>
      <p>
        To contribute to the project, please visit the project's{" "}
        <a href="https://github.com/bdavis222/pypi-maker" target="_blank">
          GitHub page
        </a>
        .
      </p>
      <Footer />
    </>
  );
}

export default PypiMaker;
