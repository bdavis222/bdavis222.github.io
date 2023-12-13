import Timings from "./Timings";

function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <Timings
        timerMin="1"
        timerMax="2 hours"
        calendar="3 months"
        timerMinColor="green"
        timerMaxColor="green"
        calendarColor="orange"
      />
      <p>
        An example of a strong resume can be found{" "}
        <a href="https://www.careercup.com/resume" target="_blank">
          here
        </a>
        . It is crucial to highlight your technical skills, and not skills you
        may have from a previous career that are not as relevant in software
        engineering. For example, one may have written several scientific papers
        in an academic career, but it is much more important to highlight
        software projects, since there is not likely to be as much relevant
        software work experience.
      </p>
      <h3>Job Applications</h3>
      <p>
        At this point, you have added some projects to your resume, and you are
        ready to start applying to jobs. Applying to jobs doesn't mean you have
        to stop working on projects though! The more projects you complete and
        add to your resume the better, if you have time to keep working on new
        things while prepping for interviews.
      </p>
      <p>
        If you start applying now, then by the time you start hearing back about
        interviews, you should be performing at an adequate level on technical
        interview questions, assuming you keep up a decent pace through the
        remaining sections of this roadmap. You should continue applying for
        jobs regularly from now through the rest of the roadmap.
      </p>
    </>
  );
}

export default Resume;
