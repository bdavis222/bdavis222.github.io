import DonateButton from "../DonateButton";
import PythonCourseMobileFooter from "./PythonCourseMobileFooter";

function PythonCourseMobile() {
  const showContent = false;
  const bannerImage = "assets/python.png";
  document.title = "Intro to Python";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  if (showContent) {
    return (
      <>
        <h1 id="title">{document.title}</h1>
        <h2 className="subtitle">
          An introductory course for beginners to programming
        </h2>
        <DonateButton />
        <img src={bannerImage} className="page-banner" />
        <h2>Table of Contents</h2>
        <ol start={0}>
          <li>
            <a href="">Introduction</a>
          </li>
          <li>
            <a href="">Basics</a>
          </li>
          <li>
            <a href="">Tuples</a>
          </li>
          <li>
            <a href="">Lists</a>
          </li>
          <li>
            <a href="">Conditionals</a>
          </li>
          <li>
            <a href="">While-loops</a>
          </li>
          <li>
            <a href="">For-loops</a>
          </li>
          <li>
            <a href="">Sublists</a>
          </li>
          <li>
            <a href="">Functions</a>
          </li>
          <li>
            <a href="">Documentation</a>
          </li>
          <li>
            <a href="">Files</a>
          </li>
          <li>
            <a href="">Sets</a>
          </li>
          <li>
            <a href="">Dictionaries</a>
          </li>
          <li>
            <a href="">Classes</a>
          </li>
          <li>
            <a href="">Inheritance</a>
          </li>
          <li>
            <a href="">Error handling</a>
          </li>
          <li>
            <a href="">Modules</a>
          </li>
          <li>
            <a href="">Numpy arrays</a>
          </li>
          <li>
            <a href="">Plotting</a>
          </li>
          <li>
            <a href="">N-dimensional arrays</a>
          </li>
          <li>
            <a href="">Images</a>
          </li>
          <li>
            <a href="">Modularization</a>
          </li>
        </ol>
        <PythonCourseMobileFooter
          previousLessonLink=""
          nextLessonLink="/#/blah"
          hideLessonsLink={true}
        />
      </>
    );
  } else {
    return (
      <>
        <h1 id="title">{document.title}</h1>
        <h2 className="subtitle">
          An introductory course for beginners to programming
        </h2>
        <DonateButton />
        <img src={bannerImage} className="page-banner" />
        <p>This page is under construction.</p>
      </>
    );
  }
}

export default PythonCourseMobile;
