import DonateButton from "./DonateButton";
import Footer from "./Footer";

function Gravity() {
  return (
    <>
      <h1>Gravity</h1>
      <h2 className="subtitle">A game for space travel enthusiasts</h2>
      <DonateButton />
      <img src="assets/gravity.png" className="page-banner" />
      <p>
        Gravity is a game in which the player uses the gravitational fields of
        planets to navigate their spaceship toward a target planet to land it
        safely. Several powerups can be acquired and used along the way, which
        will allow the player to use extra boosts or shoot missiles. The game
        also features a level editor (unlocked when reaching a certain level in
        the game), which allows the player to make their own custom levels to
        play.
      </p>
      <p>
        Gravity was written in C++ using the{" "}
        <a href="https://www.sfml-dev.org">SFML library</a>.
      </p>
      <hr />
      <h2>Gameplay Demo</h2>
      <p>Below is a demo of the first few levels of gameplay in Gravity.</p>
      <iframe
        width="420"
        height="345"
        src="https://www.youtube.com/embed/evGW_AUilRQ"
        allowFullScreen
      ></iframe>
      <p>
        The player tries to land on the green planet in each level. Flying into
        other planets or flying too far off the screen results in the player's
        ship exploding. There are boost and missile power-ups that can be
        collected in the game to help the player navigate the levels.
      </p>
      <hr />
      <Footer />
    </>
  );
}

export default Gravity;
