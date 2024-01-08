import Timings from "./Timings";

function Python() {
  return (
    <>
      <h2>Basic Programming</h2>
      <Timings
        timerMin="2"
        timerMax="4 weeks"
        calendar="8 months"
        timerMinColor="orange"
        timerMaxColor="red"
        calendarColor="green"
      />
      <p>
        If you don't yet know how to program in any language, I have designed an{" "}
        <a href="/#/python" target="_blank">
          introductory Python course
        </a>{" "}
        to bring you up to speed. If you already know how to program in either
        Python or any other language, you can skip to the next section.
      </p>
      <p>
        Note that a good understanding of object-oriented programming (OOP) is
        essential to success in software engineering. If you do not have a solid
        grasp of OOP, please look over the lessons on{" "}
        <span className="green-text">classes</span> and{" "}
        <span className="green-text">inheritance</span> in the introductory
        Python course (and also do the corresponding tutorials).
      </p>
    </>
  );
}

export default Python;
