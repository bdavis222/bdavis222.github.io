import Timings from "./Timings";

function InterviewIntro() {
  return (
    <>
      <h2>Introduction to Interview Questions</h2>
      <Timings
        timerMin="30"
        timerMax="60 minutes"
        calendar="6 months"
        timerMinColor="green"
        timerMaxColor="green"
        calendarColor="orange"
      />
      <p>
        And here is why learning data structures and algorithms is so important:
        these are exactly the topics that will be tested in job interviews. The
        following are some simple interview questions that are a bit too simple
        to be asked in a real interview, but might give an idea of what kind of
        prep will be required going forward (but not yet!). I encourage you to
        look at these problems now, and maybe even think of what you might do to
        try to solve them, but not actually try to solve them just yet. When
        interview prep begins, you will come back to these questions. For now,
        just look at these problems:
      </p>
      <div>
        <input type="checkbox" />{" "}
        <a href="https://leetcode.com/problems/two-sum/" target="_blank">
          Two Sum
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://leetcode.com/problems/univalued-binary-tree/"
          target="_blank"
        >
          Univalued Binary Tree
        </a>
      </div>
      <hr />
    </>
  );
}

export default InterviewIntro;
