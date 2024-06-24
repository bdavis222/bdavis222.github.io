import DonateButton from "../DonateButton";
import Footer from "../Footer";
import LinkButton from "../LinkButton";

function PythonCourseMobile() {
  const bannerImage = "assets/python-mobile.png";
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
      <h2 className="subtitle">A mobile course for beginners to programming</h2>
      <DonateButton />
      <img src={bannerImage} className="page-banner" />
      <p>
        Welcome to the read-only, mobile-friendly version of this introductory
        Python course!{" "}
        <i>
          Note: Due to the small sizes of mobile screens, all of the code cells
          in this mobile version of the course are horizontally scrollable.
        </i>{" "}
        Click the button below to begin.
      </p>
      <LinkButton
        label="Begin course"
        link="lessons/00_intro.html"
        color="green"
      />
      <h2 style={{ marginTop: 30 }}>Table of Contents</h2>
      <ol start={0}>
        <li>
          <a href="lessons/00_intro.html">Introduction</a>
        </li>
        <li>
          <a href="lessons/01_basics.html">Basics</a>
        </li>
        <li>
          <a href="lessons/02_tuples.html">Tuples</a>
        </li>
        <li>
          <a href="lessons/03_lists.html">Lists</a>
        </li>
        <li>
          <a href="lessons/04_conditionals.html">Conditionals</a>
        </li>
        <li>
          <a href="lessons/05_while_loops.html">While-loops</a>
        </li>
        <li>
          <a href="lessons/06_for_loops.html">For-loops</a>
        </li>
        <li>
          <a href="lessons/07_sublists.html">Sublists</a>
        </li>
        <li>
          <a href="lessons/08_functions.html">Functions</a>
        </li>
        <li>
          <a href="lessons/09_documentation.html">Documentation</a>
        </li>
        <li>
          <a href="lessons/10_files.html">Files</a>
        </li>
        <li>
          <a href="lessons/11_sets.html">Sets</a>
        </li>
        <li>
          <a href="lessons/12_dictionaries.html">Dictionaries</a>
        </li>
        <li>
          <a href="lessons/13_classes.html">Classes</a>
        </li>
        <li>
          <a href="lessons/14_inheritance.html">Inheritance</a>
        </li>
        <li>
          <a href="lessons/15_error_handling.html">Error handling</a>
        </li>
        <li>
          <a href="lessons/16_modules.html">Modules</a>
        </li>
        <li>
          <a href="lessons/17_numpy_arrays.html">Numpy arrays</a>
        </li>
        <li>
          <a href="lessons/18_plotting.html">Plotting</a>
        </li>
        <li>
          <a href="lessons/19_nd_arrays.html">Multi-dimensional arrays</a>
        </li>
        <li>
          <a href="lessons/20_images.html">Images</a>
        </li>
        <li>
          <a href="lessons/21_modularization.html">Modularization</a>
        </li>
      </ol>
      <p>
        For parity, each of the above sections are numbered as they are in the{" "}
        <a href="/#/python">fully interactive</a> course. Make sure to also go
        through the fully interactive course for its tutorials and projects,
        which help to reinforce what is learned.
      </p>
      <Footer />
    </>
  );
}

export default PythonCourseMobile;
