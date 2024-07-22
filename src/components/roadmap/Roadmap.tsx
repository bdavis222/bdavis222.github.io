import Footer from "../Footer";
import TopFab from "../TopFab";
import Algorithms from "./Algorithms";
import InterviewIntro from "./InterviewIntro";
import InterviewPrep from "./InterviewPrep";
import Intro from "./Intro";
import Mocks from "./Mocks";
import Python from "./Python";
import Resume from "./Resume";
import ResumeProjects from "./ResumeProjects";

function Roadmap() {
  const bannerImage = "assets/roadmap.png";
  document.title = "SWE Roadmap";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <TopFab
        names={[
          "Basic Programming",
          "Algorithms",
          "Interview Questions",
          "Projects",
          "Resumé",
          "Interview Prep",
          "Mocks",
        ]}
        links={[
          "/roadmap#basic-programming",
          "/roadmap#algorithms",
          "/roadmap#interview-questions",
          "/roadmap#projects",
          "/roadmap#resume",
          "/roadmap#interview-prep",
          "/roadmap#mocks",
        ]}
      />
      <Intro />
      <Python />
      <Algorithms />
      <InterviewIntro />
      <ResumeProjects />
      <Resume />
      <InterviewPrep />
      <Mocks />
      <Footer disclaimer="This page content was created prior to April 2022." />
    </>
  );
}

export default Roadmap;
