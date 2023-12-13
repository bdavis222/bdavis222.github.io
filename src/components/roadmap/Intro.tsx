import DonateButton from "../DonateButton";
import Icon from "./Icon";

function Intro() {
  return (
    <>
      <h1>Software Engineering Roadmap</h1>
      <h2 className="subtitle">
        A guide to landing a career in the software industry
      </h2>
      <DonateButton />
      <img src="assets/roadmap.png" className="page-banner" />
      <p>
        This website is designed to guide people of all different levels of
        programming experience (including no experience) to the level of a
        junior software engineer, and teach them the skills needed to land a job
        in the field. The reader should read over this entire document before
        starting the process, to understand all of the steps involved before
        beginning. Each section of this document should be completed in order,
        as concepts build on each other.
      </p>
      <p>
        There are two time estimates given below each section header, which are
        as follows:
      </p>
      <ol>
        <li>
          An estimate for how long that section should take to complete:{" "}
          <Icon type="timer" />
        </li>
        <li>
          The minimum amount of time left in the process (i.e., until your
          desired job interview date) upon starting that section:{" "}
          <Icon type="calendar" />
        </li>
      </ol>
    </>
  );
}

export default Intro;
