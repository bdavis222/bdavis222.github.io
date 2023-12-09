import DonateButton from "../DonateButton";
import Footer from "../Footer";
import GitHubCard from "../profile-card/GitHubCard";
import LinkedInCard from "../profile-card/LinkedInCard";
import CompanyInfo from "./CompanyInfo";
import SoftwarePageCard from "../profile-card/SoftwarePageCard";
import Publication from "../publications/Publication";

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
      <h1>Brian Davis</h1>
      <h2 className="subtitle">Software Engineer | Ph.D.</h2>
      <div style={{ textAlign: "center" }}>
        <img className="profile-image" src="assets/headshot.png" alt="" />
      </div>
      <DonateButton />
      <h2>About</h2>
      <p>
        I am a software engineer with over ten years of teaching and
        collaborative work experience in academia. I received my Ph.D. in
        astrophysics in 2022, and have worked in the software industry ever
        since. My background in mathematics and computational techniques drives
        my interest in many of the personal software products I create.
      </p>
      <h2>Software</h2>
      <p>
        This page showcases several different software products{" "}
        <i>
          (including this website itself, written in TypeScript using the React
          library)
        </i>
        . All of these are free to use, and instructions for their installation
        and use are provided for each. To see more, visit my software page:
      </p>
      <SoftwarePageCard />
      <h2 style={{ marginBottom: 25 }}>Experience</h2>
      <div className="company-card">
        <CompanyInfo
          name="Google"
          jobTitle="Software Engineer"
          dates="Apr 2022 - Present"
          icon="assets/google-name.png"
        />
        <ul className="company-achievements">
          <li>Developing features for Google Drive Android</li>
        </ul>
      </div>
      <div className="company-card">
        <CompanyInfo
          name="Penn State"
          jobTitle="Research Assistant"
          dates="Aug 2016 - Apr 2022"
          icon="assets/psu-name.png"
        />
        <ul className="company-achievements">
          <li>Ph.D. in astrophysics, 2022</li>
          <li>M.S. in astrophysics, 2018</li>
          <li>
            Ph.D. Thesis:{" "}
            <i>Late-stage Evolution of Low- and Intermediate-mass Stars</i>
          </li>
        </ul>
      </div>
      <div className="company-card">
        <CompanyInfo
          name="CU Boulder"
          jobTitle="Research Assistant"
          dates="Apr 2015 - May 2016"
          icon="assets/cu-name.png"
        />
        <ul className="company-achievements">
          <li>B.A. in astrophysics, 2016</li>
          <li>
            Honors Thesis:{" "}
            <i>
              Adaptive Optics-Assisted Integral Field Spectroscopy of NGC 5506
            </i>
          </li>
        </ul>
      </div>
      <h2>Skills</h2>
      <div>
        <img
          className="icon"
          src="assets/android-logo.png"
          alt="Android logo"
        />
        <img
          className="icon"
          src="assets/compose-logo.png"
          alt="Jetpack Compose logo"
        />
        <img className="icon" src="assets/kotlin-logo.png" alt="Kotlin logo" />
        <img className="icon" src="assets/java-logo.png" alt="Java logo" />
        <img className="icon" src="assets/python-logo.png" alt="Python logo" />
        <img
          className="icon"
          src="assets/jupyter-logo.png"
          alt="Jupyter logo"
        />
        <img className="icon" src="assets/apple-logo.png" alt="Apple logo" />
        <img
          className="icon"
          src="assets/swiftui-logo.png"
          alt="SwiftUI logo"
        />
        <img className="icon" src="assets/swift-logo.png" alt="Swift logo" />
        <img className="icon" src="assets/cpp-logo.png" alt="C++ logo" />
        <img
          className="icon"
          src="assets/javascript-logo.png"
          alt="JavaScript logo"
        />
        <img
          className="icon"
          src="assets/typescript-logo.png"
          alt="TypeScript logo"
        />
        <img className="icon" src="assets/html-logo.png" alt="HTML logo" />
        <img className="icon" src="assets/css-logo.png" alt="CSS logo" />
        <img className="icon" src="assets/react-logo.png" alt="React logo" />
        <img className="icon" src="assets/sql-logo.png" alt="SQL logo" />
        <img className="icon" src="assets/r-logo.png" alt="R logo" />
        <img className="icon" src="assets/git-logo.png" alt="Git logo" />
      </div>
      <p>
        Android Development · Jetpack Compose · Kotlin · Java · Python · iOS
        Development · SwiftUI · Swift · C++ · JavaScript · TypeScript · HTML ·
        CSS · React · SQL · R · Git · Clean Architecture · Model-View-ViewModel
        (MVVM) · Model-View-Presenter (MVP) · Unit Testing · Android Studio ·
        Xcode · Visual Studio Code · Image Processing · Computational Physics ·
        Mathematical Modeling · Physics · Astrophysics · Research · Scientific
        Writing · Teaching · Public Speaking
      </p>
      <h2>Publications</h2>
      <Publication
        title="A Recurrent Nova Super-Remnant in the Andromeda Galaxy"
        journal="Nature"
        date="Jan 2019"
        link="https://www.nature.com/articles/s41586-018-0825-4.epdf?author_access_token=Efv4kYyb8NweZ1W1tYmiYdRgN0jAjWel9jnR3ZoTv0N8qBJDnwa59hGY4PDdFI5yg_gnOrjBQgwM9FCrVQsuZahhXf1Qwl_lZHr5DDGM34vvvO_OQYNvo7VsvJMiCWIlCU1wcJOxs7-ZwFTtSFhguQ%3D%3D"
      />
      <Publication
        title="A Census of AHB Stars in Galactic Globular Clusters"
        journal="The Astrophysical Journal"
        date="Feb 2022"
        link="https://iopscience.iop.org/article/10.3847/1538-4357/ac4224"
      />
      <Publication
        title="The True Luminosities of Planetary Nebulae in M31’s Bulge"
        journal="The Astrophysical Journal"
        date="Aug 2018"
        link="https://iopscience.iop.org/article/10.3847/1538-4357/aad3c4"
      />
      <div style={{ textAlign: "center", fontSize: "small" }}>
        <a style={{ color: "gray" }} href="/#/publications">See all</a>
      </div>
      <h2>Contact</h2>
      <h3 style={{ marginTop: 0, marginBottom: -10 }}>GitHub</h3>
      <p>
        Feel free to visit my GitHub page and see my public repositories. I
        enjoy collaboration with others on personal projects!
      </p>
      <GitHubCard />
      <h3 style={{ marginTop: 30, marginBottom: -10 }}>LinkedIn</h3>
      <p>
        If you have any questions, or wish to contact me, feel free to message
        me on LinkedIn:
      </p>
      <LinkedInCard />
      <hr />
      <Footer />
    </>
  );
}

export default Home;
