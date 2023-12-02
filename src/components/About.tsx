import DonateButton from "./DonateButton";
import Footer from "./Footer";

function About() {
  return (
    <>
      <h1>About This Website</h1>
      <DonateButton />
      <p>
        This page showcases several different software products{" "}
        <i>
          (including this website itself, written in TypeScript using the React
          library)
        </i>
        . All of these products are free to use, and instructions for their
        installation and use are provided for each. To see these products, visit
        the <a href="/">software page</a>.
      </p>
      <p>
        In addition to these free-to-use software products, this site also
        provides a free <a href="/#/roadmap">software engineering roadmap</a>,
        which is a simple step-by-step guide for those interested in pursuing a
        career in software engineering. This is also found on the software page.
        Within that guide is an{" "}
        <a href="/#/python">introductory Python programming course</a>, for
        users who are brand new to programming and want to get started learning.
      </p>
      <h2>About the Author</h2>
      <p>
        My name is Brian Davis. I am a software engineer with several years of
        teaching and collaborative work experience in academia (Ph.D. in
        astrophysics). My background in mathematics and computational techniques
        drives my interest in much of the software I create.
      </p>
      <h3>Experience</h3>
      <h4>
        <img
          className="company-name"
          src="assets/google-name.png"
          alt="Google logo"
        />
      </h4>
      <p className="subtitle-left">Software Engineer, April 2022 - Present</p>
      <ul>
        <li>Developing features for Google Drive Android</li>
      </ul>
      <br />
      <h4>
        <img
          className="company-name"
          src="assets/psu-name.png"
          alt="Penn State logo"
        />
      </h4>
      <p className="subtitle-left">
        Research Assistant, August 2016 - April 2022
      </p>
      <ul>
        <li>Ph.D. in astronomy &amp; astrophysics, May 2022</li>
        <li>M.S. in astronomy &amp; astrophysics, May 2018</li>
        <li>
          Ph.D. Thesis:{" "}
          <i>Late-stage Evolution of Low- and Intermediate-mass Stars</i>
        </li>
      </ul>
      <br />
      <h4>
        <img
          className="company-name"
          src="assets/cu-name.png"
          alt="CU Boulder logo"
        />
      </h4>
      <p className="subtitle-left">Research Assistant, April 2015 - May 2016</p>
      <ul>
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
