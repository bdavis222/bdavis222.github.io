import DonateButton from "../DonateButton";
import Footer from "../Footer";
import PersonalBlurb from "./PersonalBlurb";
import LinkedInCard from "../profile-card/LinkedInCard";
import SoftwareBlurb from "./SoftwareBlurb";
import CompanyInfo from "./CompanyInfo";

function About() {
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
      <h1>About This Website</h1>
      <DonateButton />
      <SoftwareBlurb />
      <p>
        In addition to these free-to-use software products, this site also
        provides a free software engineering <a href="/#/roadmap">roadmap</a>,
        which is a simple step-by-step guide for those interested in pursuing a
        career in software engineering. This is also found on the software page.
        Within that guide is an introductory Python programming{" "}
        <a href="/#/python">course</a>, for users who are brand new to
        programming and want to get started learning.
      </p>
      <h2>About the Author</h2>
      <LinkedInCard />
      <PersonalBlurb />
      <h3>Experience</h3>
      <CompanyInfo
        name="Google"
        jobTitle="Software Engineer"
        dates="April 2022 - Present"
        icon="assets/google-name.png"
      />
      <ul style={{ marginBottom: 60 }}>
        <li>Developing features for Google Drive Android</li>
      </ul>
      <CompanyInfo
        name="Penn State University"
        jobTitle="Research Assistant"
        dates="August 2016 - April 2022"
        icon="assets/psu-name.png"
      />
      <ul style={{ marginBottom: 60 }}>
        <li>Ph.D. in astronomy &amp; astrophysics, May 2022</li>
        <li>M.S. in astronomy &amp; astrophysics, May 2018</li>
        <li>
          Ph.D. Thesis:{" "}
          <i>Late-stage Evolution of Low- and Intermediate-mass Stars</i>
        </li>
      </ul>
      <CompanyInfo
        name="University of Colorado"
        jobTitle="Research Assistant"
        dates="April 2015 - May 2016"
        icon="assets/cu-name.png"
      />
      <ul style={{ marginBottom: 40 }}>
        <li>B.A. in astrophysics, May 2016</li>
        <li>
          Honors Thesis:{" "}
          <i>
            Adaptive Optics-Assisted Integral Field Spectroscopy of NGC 5506
          </i>
        </li>
      </ul>
      <h3>Skills</h3>
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
      <hr />
      <Footer />
    </>
  );
}

export default About;
