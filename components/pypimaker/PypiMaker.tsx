import DonateButton from "../DonateButton";
import Footer from "../Footer";
import Changing from "./Changing";
import Generating from "./Generating";
import GettingStarted from "./GettingStarted";
import Resetting from "./Resetting";
import Uploading from "./Uploading";

function PypiMaker() {
  return (
    <>
      <h1>PyPI Maker</h1>
      <h2 className="subtitle">
        Software designed for simplifying PyPI Python package setups
      </h2>
      <DonateButton />
      <img src="assets/pypimaker.png" className="page-banner" />
      <p>
        PyPI Maker is designed to simplify uploading Python packages to the
        Python Package Index (PyPI). The program runs entirely within a
        window-based graphical user interface, so as to not require any
        programming knowledge from the user in order to upload their package and
        manage it on PyPI.
      </p>
      <p>Donations are appreciated, but not required.</p>
      <hr />
      <GettingStarted />
      <hr />
      <Generating />
      <hr />
      <Uploading />
      <hr />
      <Resetting />
      <hr />
      <Changing />
      <hr />
      <h2>Development</h2>
      <p>
        To contribute to the project, please visit the project's{" "}
        <a href="https://github.com/bdavis222/pypi-maker">GitHub page</a>.
      </p>
      <hr />
      <Footer />
    </>
  );
}

export default PypiMaker;
