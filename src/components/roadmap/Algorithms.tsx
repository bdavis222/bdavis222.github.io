import Timings from "./Timings";

function Algorithms() {
  return (
    <>
      <h2>Data Structures and Algorithms</h2>
      <Timings
        timerMin="2"
        timerMax="5 days"
        calendar="7 months"
        timerMinColor="orange"
        timerMaxColor="orange"
        calendarColor="green"
      />
      <p>
        A good understanding of data structures is crucial in software
        engineering, as no job interview can be passed without it. You will also
        need a good understanding of these topics to work on software projects
        for your resume. I recommend watching the{" "}
        <a
          href="https://www.youtube.com/watch?v=_t2GVaQasRY&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12"
          target="_blank"
        >
          codebasics YouTube playlist
        </a>{" "}
        on data structures and algorithms (and doing the practice problems
        therein) for an overview of basic data structures (in Python). The
        following are the most important videos in the playlist:
      </p>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=_t2GVaQasRY&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=1"
          target="_blank"
        >
          What are data structures?
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=IR_S8BC8KI0&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=2"
          target="_blank"
        >
          Big O notation
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=gDqQf4Ekr2A&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=3"
          target="_blank"
        >
          Arrays
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=qp8u-frRAnU&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=4"
          target="_blank"
        >
          Linked lists
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=ea8BRGxGmlA&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=5"
          target="_blank"
        >
          Hash tables (part 1)
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=54iv1si4YCM&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=6"
          target="_blank"
        >
          Hash tables (part 2)
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=zwb3GmNAtFk&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=7"
          target="_blank"
        >
          Stacks
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=rUUrmGKYwHw&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=8"
          target="_blank"
        >
          Queues
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=4r_XR9fUPhQ&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=9"
          target="_blank"
        >
          Trees
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=lFq5mYUWEBk&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=10"
          target="_blank"
        >
          Binary trees (part 1)
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=JnrbMQyGLiU&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=11"
          target="_blank"
        >
          Binary trees (part 2)
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=j0IYCyBdzfA&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=12"
          target="_blank"
        >
          Graphs
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=GnZ9ppr_zaI&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=13"
          target="_blank"
        >
          Binary search
        </a>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <a
          href="https://www.youtube.com/watch?v=9bsK03SlmNM&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&index=20"
          target="_blank"
        >
          Recursion
        </a>
      </div>
      <p>
        While this playlist does also cover several sorting algorithms, I
        recommend not stressing too much over these concepts until beginning
        interview prep. Feel free to skip those other videos for now, but if you
        do find yourself needing to understand a particular sorting method, this
        is still a very good source for learning those.
      </p>
      <hr />
    </>
  );
}

export default Algorithms;
