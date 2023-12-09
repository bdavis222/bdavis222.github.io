import DonateButton from "../DonateButton";
import Footer from "../Footer";
import PersonalBlurb from "../about/PersonalBlurb";
import GitHubCard from "../profile-card/GitHubCard";
import LinkedInCard from "../profile-card/LinkedInCard";
import SoftwareBlurb from "../about/SoftwareBlurb";

function Home() {
  const bannerImage = "assets/about-banner.png";
  document.title = "Brian Davis - Software Engineer";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <h1>Brian Davis</h1>
      <h2 className="subtitle">Software Engineer</h2>
      <DonateButton />
      <h2>About</h2>
      <PersonalBlurb />
      <h2>Software</h2>
      <SoftwareBlurb />
      <h2>Contact</h2>
      <p>
        If you have any questions, or wish to contact me, feel free to message
        me on LinkedIn:
      </p>
      <LinkedInCard />
      <p>Also, feel free to visit my GitHub page and see my public
        repositories. I enjoy collaboration with others on personal projects!
      <GitHubCard />
      <hr />
      <Footer />
    </>
  );
}

export default Home;
