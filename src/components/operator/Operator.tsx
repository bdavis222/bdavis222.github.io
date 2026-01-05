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
        level. The difficulty adapts to player performance for any of the
        selected difficulty levels, providing a challenge for all ages. Operator
        is coming soon to both iOS and Android:
      </p>

      <MobileAppStoreButtons
        iosLink="https://www.apple.com/app-store/" // Use App Store URL when available
        androidLink="https://play.google.com/store/apps" // Use Google Play URL when available
      />

      <h2>Screenshots</h2>

      <p>
        Below are some screenshots of the app, showing the home screen, some
        gameplay, the game-over screen, the online leaderboards, and the list of
        achievements. Along with these achievements and online leaderboards,
        players can also review their personal top scores for each difficulty
        level locally on the device, and their daily streak is tracked and
        displayed on the home screen.
      </p>

      <div className="mobile-screenshot-container">
        <img
          className="mobile-screenshot"
          src="assets/operator-home.png"
          alt="Operator home screen"
        />
        <img
          className="mobile-screenshot"
          src="assets/operator-level3.png"
          alt="Operator gameplay"
        />
        <img
          className="mobile-screenshot"
          src="assets/operator-level4.png"
          alt="Operator gameplay"
        />
        <img
          className="mobile-screenshot"
          src="assets/operator-game-over.png"
          alt="Operator game-over screen"
        />
        <img
          className="mobile-screenshot"
          src="assets/operator-leaderboards.png"
          alt="Operator leaderboards screen"
        />
        <img
          className="mobile-screenshot"
          src="assets/operator-achievements.png"
          alt="Operator achievements screen"
        />
      </div>

      <p>Check back soon to play it for free on your iOS or Android device!</p>

      <Footer />
    </>
  );
}

export default Operator;
