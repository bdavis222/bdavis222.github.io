import DonateButton from "../DonateButton";
import Footer from "../Footer";

function Gravity() {
  const bannerImage = "assets/gravity.png";
  document.title = "Gravity";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <h1>{document.title}</h1>
      <h2 className="subtitle">A game for space travel enthusiasts</h2>
      <DonateButton />
      <img src={bannerImage} className="page-banner" />
      <p>
        Gravity is a game in which the player uses the gravitational fields of
        planets to navigate their spaceship toward a target planet to land it
        safely. Several powerups can be acquired and used along the way, which
        will allow the player to use extra boosts or shoot missiles.
      </p>
      <p>
        The game also features a level editor (unlocked when reaching a certain
        level in the game), which allows the player to make their own custom
        levels to play.
      </p>
      <p>
        Gravity was written in C++ using the{" "}
        <a href="https://www.sfml-dev.org" target="_blank">
          SFML library
        </a>
        .
      </p>
      <h2>Gameplay Demo</h2>
      <p>Below is a demo of the first few levels of gameplay in Gravity.</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/evGW_AUilRQ"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <p>
        The player tries to land on the green planet in each level. Flying into
        other planets or flying too far off the screen results in the player's
        ship exploding. There are boost and missile power-ups that can be
        collected in the game to help the player navigate the levels.
      </p>
      <Footer />
    </>
  );
}

export default Gravity;
