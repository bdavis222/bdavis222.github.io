import Timings from "./Timings";

function Mocks() {
  return (
    <>
      <h2>Mock Interviews</h2>
      <Timings
        timerMin="45"
        timerMax="60 minutes"
        calendar="1 month"
        timerMinColor="green"
        timerMaxColor="green"
        calendarColor="red"
      />
      <p>
        Once you are consistently solving all of the easy problems and the
        majority of the medium problems that you're attempting, it is time to
        start doing regularly scheduled mock interviews while you continue to
        prepare. These mock interviews should be happening alongside your
        continued preparation, so don’t stop solving problems on AlgoExpert.{" "}
        <a href="https://youtu.be/3Q_oYDQ2whs?t=129" target="_blank">
          Here
        </a>{" "}
        is an example of how a good mock interview should look.
      </p>
      <p>
        Obviously, this means having a friend or colleague who can set aside
        time to interview you, and making sure that person has access to a
        decent list of questions to ask. I recommend having them select a medium
        problem from{" "}
        <a href="https://leetcode.com/problemset/all/" target="_blank">
          LeetCode's question bank
        </a>{" "}
        for your first mock, since 1) this is a free site, and 2) you probably
        won't have already solved the exact problem they select, since you are
        doing your preparation on AlgoExpert, not LeetCode.{" "}
        <i>
          Note: one of the benefits of using the spreadsheet linked in the
          AlgoExpert section above is that, if shared with your mock
          interviewer, they can view it to see what areas you’ve studied, and
          can search for questions to appropriately challenge you.
        </i>
      </p>
      <p>
        If you don't have someone who can give you a mock interview, AlgoExpert
        actually has a mock interview feature built into their website, and{" "}
        <a href="https://www.pramp.com/#/" target="_blank">
          Pramp
        </a>{" "}
        is another site that allows people from around the world to give each
        other mock interviews for free.
      </p>
    </>
  );
}

export default Mocks;
