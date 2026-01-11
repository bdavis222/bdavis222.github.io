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

  // State for the expanded image in the carousel
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDismissing, setIsDismissing] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isDismissing) return;
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null || isDismissing) return;
    setCurrentX(e.targetTouches[0].clientX - touchStart.x);
    setCurrentY(e.targetTouches[0].clientY - touchStart.y);
  };

  const handleTouchEnd = () => {
    if (isDismissing) return;
    const distance = Math.sqrt(currentX ** 2 + currentY ** 2);

    if (distance > 150) {
      setIsDismissing(true);
      // Wait 300ms (duration of CSS transition) then remove from DOM
      setTimeout(() => {
        setSelectedImg(null);
        setIsDismissing(false);
        setCurrentX(0);
        setCurrentY(0);
      }, 300);
    } else {
      setTouchStart(null);
      setCurrentX(0);
      setCurrentY(0);
    }
  };

  const totalDistance = Math.sqrt(currentX ** 2 + currentY ** 2);
  const scale = Math.max(1 - totalDistance / 500, 0.1);
  const overlayOpacity = Math.max(0.85 - totalDistance / 600, 0);
  const dynamicBlur = isDismissing ? 0 : Math.max(5 - totalDistance / 60, 0);

  // Determine the final position if dismissing
  const translateX = isDismissing ? currentX * 5 : currentX;
  const translateY = isDismissing ? currentY * 5 : currentY;

  const imageStyle: React.CSSProperties = {
    transform: `translate(${translateX}px, ${translateY}px) scale(${
      isDismissing ? 0.5 : scale
    })`,
    opacity: isDismissing ? 0 : 1,
    // Use a transition if we are snapping back OR if we are sliding off
    transition:
      touchStart === null || isDismissing
        ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        : "none",
    touchAction: "none",
  };

  // Scroll lock and Escape key handler effects
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImg(null);
      }
    };

    if (selectedImg) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      // Add the keyboard listener when the modal opens
      window.addEventListener("keydown", handleKeyDown);
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "unset";
    }

    // When the modal closes or component unmounts
    return () => {
      // Re-enable scrolling
      document.body.style.overflow = "unset";
      // Clean up the keyboard listener
      window.removeEventListener("keydown", handleKeyDown);
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
        <li>Easy, Normal, Hard, and Expert difficulty modes</li>
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
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <p>Check back soon to play it for free on your iOS or Android device!</p>

      <Footer />

      {selectedImg && (
        <div
          className="modal-overlay"
          style={{
            backgroundColor: `rgba(var(--backgroundRGB), ${
              isDismissing ? 0 : overlayOpacity
            })`,
            // Apply dynamic blur based on swipe distance
            backdropFilter: `blur(${dynamicBlur}px)`,
            WebkitBackdropFilter: `blur(${dynamicBlur}px)`,
            // Ensure the transition matches background-color fade
            transition: isDismissing ? "all 0.3s ease" : "none",
          }}
          onClick={() => setSelectedImg(null)}
        >
          <span
            className="modal-close"
            style={{ opacity: isDismissing ? 0 : 1 }}
          >
            &times;
          </span>

          <img
            src={selectedImg}
            className="modal-content"
            alt="Enlarged"
            style={imageStyle}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>
      )}
    </>
  );
}

export default Operator;
