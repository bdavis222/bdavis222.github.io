import Timings from "./Timings";

function InterviewPrep() {
  return (
    <>
      <h2>Interview Preparation</h2>
      <Timings
        timerMin="2"
        timerMax="3 months"
        calendar="3 months"
        timerMinColor="red"
        timerMaxColor="red"
        calendarColor="orange"
      />
      <h3>Cracking the Coding Interview</h3>
      <p>
        Possibly the most famous source for interview prep is the book,{" "}
        <i>Cracking the Coding Interview</i>. The{" "}
        <a
          href="https://www.youtube.com/watch?v=shs0KM3wKv8&list=PLOuZYwbmgZWXvkghUyMLdI90IwxbNCiWK"
          target="_blank"
        >
          HackerRank YouTube playlist
        </a>{" "}
        goes into a decent amount of depth in a short amount of time. I don't
        recommend focusing too much on all of these videos, but definitely watch
        the videos covering the following topics:
      </p>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=zaBhtODEL0w&list=PLOuZYwbmgZWXvkghUyMLdI90IwxbNCiWK&index=2"
          target="_blank"
        >
          Algorithms: Graph Search, DFS and BFS
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=t0Cq6tVNRBA&list=PLOuZYwbmgZWXvkghUyMLdI90IwxbNCiWK&index=7"
          target="_blank"
        >
          Data Structures: Heaps
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=zIjfhVPRZCg&list=PLOuZYwbmgZWXvkghUyMLdI90IwxbNCiWK&index=9"
          target="_blank"
        >
          Data Structures: Tries
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=P8Xa2BitN3I&list=PLOuZYwbmgZWXvkghUyMLdI90IwxbNCiWK&index=10"
          target="_blank"
        >
          Algorithms: Memoization and Dynamic Programming
        </a>
      </div>
      <p>
        Below are the questions you looked at before you started working on your
        software projects. Each problem usually has several approaches. For each
        of these two, I have listed a few approaches. Try to solve each with
        each approach:
      </p>
      <ul>
        <li>
          <a href="https://leetcode.com/problems/two-sum/" target="_blank">
            Two Sum
          </a>
        </li>
        <div>
          <input type="checkbox" /> Brute-force{" "}
          <i>
            O(n<sup>2</sup>)
          </i>{" "}
          method
        </div>
        <div>
          <input type="checkbox" /> More optimized <i>O[n log(n)]</i> method
        </div>
        <div>
          <input type="checkbox" /> Most optimized <i>O(n)</i> method
        </div>
        <li>
          <a
            href="https://leetcode.com/problems/univalued-binary-tree/"
            target="_blank"
          >
            Univalued Binary Tree
          </a>
        </li>
        <div>
          <input type="checkbox" /> Depth-first search
        </div>
        <div>
          <input type="checkbox" /> Breadth-first search
        </div>
      </ul>
      <h3>AlgoExpert</h3>
      <p>
        In my opinion, the best resource for interview prep is{" "}
        <a href="https://www.algoexpert.io/product" target="_blank">
          AlgoExpert
        </a>
        . At the time of writing this document, the site had 160 interview
        questions with detailed, guided solutions (in Python) for each. The site
        costs about $100 for a year of access (and you can search online for a
        10% discount code), but it is well worth it, in my opinion, if it will
        make the difference between getting a job or not.
      </p>
      <p>
        The path I recommend for solving problems on AlgoExpert is laid out in{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1gV1s_hSnmRRM3qbjhMVzgptdbSHwMMinL5Zpw8fdtFA"
          target="_blank"
        >
          this spreadsheet
        </a>{" "}
        (make a copy of it so you can edit your copy). To track your progress,
        change the date in the formula of cell <code>L38</code> to today's date
        (or whatever date you decide to begin using AlgoExpert). The default
        pacing is set to 3 questions per day (cell <code>L36</code>) and 5 days
        per week (cell <code>L37</code>), but you can change this to whatever
        value you prefer. The top left of the spreadsheet will then let you know
        whether or not you are on pace in your studies, as long as you are
        checking off problems in the spreadsheet after solving them on
        AlgoExpert.
      </p>
      <p>
        You should solve problems one row at a time, starting with row 3 (i.e.,{" "}
        <i>
          "<span className="green-text">Two Number Sum</span>"
        </i>
        ,{" "}
        <i>
          "<span className="green-text">Find Closest Value in BST</span>"
        </i>
        ,{" "}
        <i>
          "<span className="green-text">Branch Sums</span>"
        </i>
        , etc.). Once reaching a <span className="red-text">hard</span> problem
        in a particular category (marked by a red cell in the difficulty
        column), I recommend skipping that problem and moving along to the next{" "}
        <span className="blue-text">medium</span> problem in that row until you
        have finished all of the <span className="blue-text">medium</span>{" "}
        problems. The <span className="gray-text">grayed out</span> problems are
        less crucial, in my opinion, and should also be skipped on the first
        pass. So, following these rules,{" "}
        <i>
          "<span className="blue-text">Kadane's Algorithm</span>"
        </i>
        ,{" "}
        <i>
          "<span className="gray-text">Bubble Sort</span>"
        </i>
        ,
        <i>
          "<span className="red-text">Dijkstra's Algorithm</span>"
        </i>
        , and{" "}
        <i>
          "<span className="red-text">Continuous Median</span>"
        </i>{" "}
        should be the first four problems skipped, in that order.
      </p>
      <p>
        If you feel helpless after the first row or two of problems, being
        basically unable to solve any of them, just realize that this is totally
        normal! It takes a while to learn the patterns to be able to solve these
        problems. This is why the detailed solution videos are so valuable on
        AlgoExpert. Just try your best on each problem, and watch the videos
        when you get stuck. You will learn the patterns if you keep going. (And
        for a more direct look at the patterns themselves, I recommend{" "}
        <a
          href="https://www.educative.io/courses/grokking-coding-interview-patterns-java"
          target="_blank"
        >
          Grokking the Coding Interview
        </a>
        .)
      </p>
      <hr />
    </>
  );
}

export default InterviewPrep;
