import DonateButton from "../DonateButton";
import Footer from "../Footer";
import Configurations from "./Configurations";
import StartingDotScanner from "./StartingDotScanner";
import RegionSelection from "./RegionSelection";
import ThresholdAdjustment from "./ThresholdAdjustment";

function DotScanner() {
  const bannerImage = "assets/dotscanner.png";
  document.title = "Dot Scanner";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <h1>{document.title}</h1>
      <h2 className="subtitle">Microscope image analysis software</h2>
      <DonateButton />
      <img src={bannerImage} className="page-banner" />
      <p>
        Dot Scanner is designed to simplify analysis of microscope imaging data.
        The program runs entirely within a window-based graphical user
        interface, so as to not require any programming knowledge from the user
        in order to complete their image analysis (see the images below for
        examples). This software is especially useful for noisy image data,
        where manual "by-eye" analysis is unreliable.
      </p>
      <p>Donations are appreciated, but not required.</p>
      <hr />
      <StartingDotScanner />
      <hr />
      <Configurations />
      <hr />
      <ThresholdAdjustment />
      <hr />
      <RegionSelection />
      <hr />
      <h2>Citations</h2>
      <p>
        When using this program on data used in published works, please cite:
      </p>
      <p>Allen, H., Davis, B., Patel, J., & Gu, Y. 2023 (in prep.)</p>
      <hr />
      <h2>Development</h2>
      <p>
        For more information, or to contribute to the project, please visit the
        project's{" "}
        <a href="https://github.com/bdavis222/dot-scanner" target="_blank">
          GitHub page
        </a>
        .
      </p>
      <hr />
      <Footer />
    </>
  );
}

export default DotScanner;
