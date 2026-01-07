import DonateButton from "../DonateButton";
import Footer from "../Footer";
import MobileAppStoreButtons from "./MobileAppStoreButtons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";

function Operator() {
  const bannerImage = "assets/operator.png";
  document.title = "Operator";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  const screenshots = [
    "assets/operator-home.png",
    "assets/operator-level3.png",
    "assets/operator-level4.png",
    "assets/operator-game-over.png",
    "assets/operator-leaderboards.png",
    "assets/operator-achievements.png",
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImg) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scrolling is re-enabled if the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImg]);

  const responsive = {
    large: {
      breakpoint: { max: 3000, min: 930 },
      items: 5,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 930, min: 760 },
      items: 4,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 760, min: 500 },
      items: 3,
      slidesToSlide: 1,
    },
    tiny: {
      breakpoint: { max: 500, min: 370 },
      items: 2,
      slidesToSlide: 1,
    },
    mini: {
      breakpoint: { max: 370, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

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

      <h2>Features</h2>

      <ul>
        <li>Easy, Normal, and Hard starting difficulty modes</li>
        <li>
          Online leaderboards (using the built-in <i>Game Center</i> on iOS and{" "}
          <i>Play Games Services</i> on Android)
        </li>
        <li>Local offline high-score tables</li>
        <li>Achievements</li>
        <li>Daily streak tracking</li>
        <li>Localizations in over 10 languages</li>
      </ul>

      <h2>Screenshots</h2>

      <p>
        Below are some screenshots of the app, showing the home screen, some
        gameplay, the game-over screen, the online leaderboards, and the list of
        achievements. Along with these achievements and online leaderboards,
        players can also review their personal top scores for each difficulty
        level locally on the device, and their daily streak is tracked and
        displayed on the home screen.
      </p>

      <div className="carousel-container">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={false} // Do not render the carousel on the server-side
          infinite={false}
          autoPlay={false}
          keyBoardControl={false}
          transitionDuration={0}
          containerClass="carousel-with-dots"
        >
          {screenshots.map((src, index) => (
            <div
              key={index}
              className="mobile-screenshot"
              onClick={() => setSelectedImg(src)}
            >
              <img
                src={src}
                alt="App Screenshot"
                style={{ cursor: "zoom-in" }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <p>Check back soon to play it for free on your iOS or Android device!</p>

      <Footer />

      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <span className="modal-close" onClick={() => setSelectedImg(null)}>
            &times;
          </span>

          <img
            src={selectedImg}
            className="modal-content"
            alt="Enlarged"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image
          />
        </div>
      )}
    </>
  );
}

export default Operator;
