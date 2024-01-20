import DonateButton from "../DonateButton";
import Footer from "../Footer";
import About from "./About";
import Software from "./Software";
import Experience from "./Experience";
import Skills from "./Skills";
import HomePublications from "./HomePublications";
import Contact from "./Contact";

function Home() {
  const bannerImage = "assets/about-banner.png";
  document.title = "Brian Davis";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <div className="home-header">
        <h1>Brian Davis</h1>
        <h2 className="subtitle">Software Engineer | Ph.D.</h2>
        <img
          className="headshot-image"
          src="assets/headshot.png"
          alt="Headshot image"
        />
      </div>
      <About />
      <Software />
      <Experience />
      <Skills />
      <HomePublications />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
