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
      <LinkedInCard />
      <PersonalBlurb />
      <p>
        Visit the <a href="/#/about">about</a> page for more.
      </p>
      <h2>Software</h2>
      <SoftwareBlurb />
      <h2>GitHub</h2>
      <GitHubCard />
      <p>
        Click the button above to visit my GitHub page and see my public
        repositories. I enjoy collaboration with others on personal projects!
      </p>
      <h2>Contact</h2>
      <p>
        If you have any questions, or wish to contact me, feel free to message
        me on LinkedIn by clicking the button in the About section above to
        visit my LinkedIn profile.
      </p>
      <hr />
      <Footer />
    </>
  );
}

export default Home;
