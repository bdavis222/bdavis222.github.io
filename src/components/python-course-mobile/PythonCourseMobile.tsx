import DonateButton from "../DonateButton";
import Footer from "../Footer";
import BeginMobileCourseButton from "../python-course/BeginMobileCourseButton";

function PythonCourseMobile() {
  const showContent = true;
  const bannerImage = "assets/python.png";
  document.title = "Python Programming";

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
        <h2 className="subtitle">Lessons for beginners</h2>
        <DonateButton />
        <img src={bannerImage} className="page-banner" />
        <p>
          Welcome to the read-only, mobile-friendly version of this introductory
          Python course!{" "}
          <i>
            Note: Due to the small sizes of mobile screens, all of the code
            cells in this mobile version of the course are horizontally
            scrollable.
          </i>
        </p>
        <BeginMobileCourseButton />
        <h2 style={{ marginTop: 30 }}>Table of Contents</h2>
        <ol start={0}>
          <li>
            <a href="src/components/python-course-mobile/lessons/00_intro.html">
              Introduction
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/01_basics.html">
              Basics
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/02_tuples.html">
              Tuples
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/03_lists.html">
              Lists
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/04_conditionals.html">
              Conditionals
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/05_while_loops.html">
              While-loops
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/06_for_loops.html">
              For-loops
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/07_sublists.html">
              Sublists
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/08_functions.html">
              Functions
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/09_documentation.html">
              Documentation
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/10_files.html">
              Files
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/11_sets.html">
              Sets
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/12_dictionaries.html">
              Dictionaries
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/13_classes.html">
              Classes
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/14_inheritance.html">
              Inheritance
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/15_error_handling.html">
              Error handling
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/16_modules.html">
              Modules
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/17_numpy_arrays.html">
              Numpy arrays
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/18_plotting.html">
              Plotting
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/19_nd_arrays.html">
              N-dimensional arrays
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/20_images.html">
              Images
            </a>
          </li>
          <li>
            <a href="src/components/python-course-mobile/lessons/21_modularization.html">
              Modularization
            </a>
          </li>
        </ol>
        <p>
          Each of these sections are numbered as in the{" "}
          <a href="https://bdavis222.github.io/python-course">
            fully interactive
          </a>{" "}
          course. Make sure to also go through the fully interactive course for
          its tutorials and projects, which help to reinforce what is learned.
        </p>
        <Footer />
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
