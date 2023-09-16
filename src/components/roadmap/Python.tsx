import Timings from "./Timings";

function Python() {
  return (
    <>
      <h2>Basic Python</h2>
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
        <a href="/#/python">introductory Python course</a> to bring you up to
        speed. If you already know how to program in either Python or any other
        language, you can skip to the next section.
      </p>
      <hr />
    </>
  );
}

export default Python;
