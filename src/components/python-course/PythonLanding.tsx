import DonateButton from "../DonateButton";
import Footer from "../Footer";
import LaunchCourseButton from "./LaunchCourseButton";

function PythonLanding() {
  const bannerImage = "assets/python.png";
  document.title = "Intro to Python";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <h1 id="title">{document.title}</h1>
      <h2 className="subtitle">
        An introductory course for beginners to programming
      </h2>
      <DonateButton />
      <img src={bannerImage} className="page-banner" />
      <p>
        Welcome! This is an interactive course designed to teach Python
        programming to beginners with no programming experience.
      </p>
      <p>Donations are appreciated, but not required.</p>
      <p className="warning-color">
        <em>
          For best results, use the <strong>Google Chrome</strong> browser for
          this course. Other browsers are known to have issues running Python
          code in the course's web interface.
        </em>
      </p>
      <p>Click the button below to launch the course website in a new tab.</p>
      <LaunchCourseButton />
      <hr />
      <h2>Course structure</h2>
      <p>The course contains three main sections:</p>
      <ul>
        <li>
          <h3>Lessons</h3>
          <p>
            These are the main lessons that will teach the concepts. These are
            located in the <b>Lessons</b> folder, and are numbered according to
            the order in which each lesson should be taken.
          </p>
        </li>
        <li>
          <h3>Tutorials</h3>
          <p>
            After each lesson, the student can find a corresponding tutorial in
            the <b>Tutorials</b> folder. The <b>Solutions</b> folder within the
            <b>Tutorials</b> folder has solutions for all of the tutorials.
            Obviously, these should only be viewed for each tutorial after
            completing that tutorial.
          </p>
        </li>
        <li>
          <h3>Projects</h3>
          <p>
            The projects are located in the <b>Projects</b> folder, and should
            only be attempted after all of the lessons and tutorials are
            completed.
          </p>
        </li>
      </ul>
      <hr />
      <h2>Navigating the course</h2>
      <p>
        When the course website loads in the new tab you just opened, you will
        see the following:
      </p>
      <a href="assets/roadmap/folders.png">
        <img
          className="bordered-image"
          src="assets/roadmap/folders.png"
          alt="Image highlighting folders"
          loading="lazy"
        />
      </a>
      <p>
        Note that the three folders shown in the red box are the only things you
        need to access to begin the course. Double-click the <b>Lessons</b>{" "}
        folder and then double-click <b>00_intro.ipynb</b> to begin the first
        lesson. The lesson content will be displayed on the right side of the
        screen.
      </p>
      <p>
        At any time, you can navigate back to the starting folder by clicking
        the folder icon shown in this image:
      </p>
      <a href="assets/roadmap/back-folder.png">
        <img
          className="bordered-image"
          src="assets/roadmap/back-folder.png"
          alt="Image highlighting back button"
          loading="lazy"
        />
      </a>
      <p>
        Follow along with the content in each lesson, tutorial, and project, and
        have fun learning!
      </p>
      <hr />
      <Footer />
    </>
  );
}

export default PythonLanding;
