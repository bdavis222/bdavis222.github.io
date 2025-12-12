import DonateButton from "../DonateButton";
import Footer from "../Footer";
import MobileAppStoreButtons from "./MobileAppStoreButtons";

function Operator() {
  const bannerImage = "assets/operator.png";
  document.title = "Operator";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <h1>{document.title}</h1>
      <h2 className="subtitle">A game for math enthusiasts</h2>
      <DonateButton />
      <img src={bannerImage} className="page-banner" />
      <p>
        Operator is a game in which the player tries to solve math puzzles
        within a given time limit to earn more time and advance to the next
        level. The puzzles are procedurally generated, so the difficulty adapts
        to player performance for any of the selected difficulty levels,
        providing a challenge for all ages.
      </p>
      <p>Operator is available for both iOS and Android:</p>
      <MobileAppStoreButtons />
      <h2>Gameplay Demo</h2>
      <p>Below is a demo of some of the gameplay in Operator.</p>
      <iframe
        width="560"
        height="315"
        src="https://youtube.com/embed/fHHGLkNMmWQ"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <p>
        There are three different base difficulty levels. After a difficulty is
        selected, the difficulty will continue to ramp up with player
        performance.
      </p>
      <Footer />
    </>
  );
}

export default Operator;
