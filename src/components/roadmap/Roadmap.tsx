import Footer from "../Footer";
import Algorithms from "./Algorithms";
import InterviewIntro from "./InterviewIntro";
import InterviewPrep from "./InterviewPrep";
import Intro from "./Intro";
import Mocks from "./Mocks";
import Projects from "./Projects";
import Python from "./Python";
import Resume from "./Resume";

function Roadmap() {
  return (
    <>
      <Intro />
      <Python />
      <Algorithms />
      <InterviewIntro />
      <Projects />
      <Resume />
      <InterviewPrep />
      <Mocks />
      <Footer disclaimer="This page content was created prior to April 2022." />
    </>
  );
}

export default Roadmap;
