import DonateButton from "../DonateButton";
import Footer from "../Footer";

function Operator() {
  return (
    <>
      <h1>Operator</h1>
      <h2 className="subtitle">
        An original iOS math puzzle game with procedurally generated levels
      </h2>
      <DonateButton />
      <img src="assets/operator.png" className="page-banner" />
      <p>
        Operator is a game in which the player tries to solve math puzzles
        within a given time limit to earn more time and advance to the next
        level. The puzzles are procedurally generated, so the difficulty adapts
        to player performance for any of the selected difficulty levels,
        providing a challenge for all ages.
      </p>
      <p>
        Operator was written for iOS in Swift using the{" "}
        <a href="https://developer.apple.com/xcode/swiftui/">
          SwiftUI development framework
        </a>
        .
      </p>
      <hr />
      <h2>Gameplay Demo</h2>
      <p>Below is a demo of some of the gameplay in Operator.</p>
      <iframe
        width="420"
        height="345"
        src="https://www.youtube.com/embed/L1w4xdlj9NU"
        allowFullScreen
      ></iframe>
      <p>
        There are three different base difficulty levels. After a difficulty is
        selected, the difficulty will continue to ramp up with player
        performance.
      </p>
      <hr />
      <Footer />
    </>
  );
}

export default Operator;
