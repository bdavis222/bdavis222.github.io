import DonateButton from "./DonateButton";
import Footer from "./Footer";
import PersonalBlurb from "./PersonalBlurb";
import ProfileCard from "./ProfileCard";
import SoftwareBlurb from "./SoftwareBlurb";

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
      <ProfileCard
        link="https://www.linkedin.com/in/briandavis123/"
        icon="assets/linkedin-logo.png"
        description="Software Engineer"
        color="#20486e"
      />
      <PersonalBlurb />
      <p>
        Visit the <a href="/#/about">about</a> page for more.
      </p>
      <h2>Software</h2>
      <SoftwareBlurb />
      <h2>GitHub</h2>
      <ProfileCard
        link="https://www.github.com/bdavis222"
        icon="assets/github-logo.png"
        description="bdavis222"
        color="#000000"
      />
      <p>
        To see my public repositories, visit my{" "}
        <a href="https://github.com/bdavis222/">GitHub</a> page.
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
