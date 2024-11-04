import ResumeProject from "./ResumeProject";
import Timings from "./Timings";

function ResumeProjects() {
  return (
    <>
      <h2 id="projects">Software Projects</h2>
      <Timings
        timerMin="2"
        timerMax="3 months"
        calendar="6 months"
        timerMinColor="red"
        timerMaxColor="red"
        calendarColor="orange"
      />
      <p>
        Software projects are the easiest way to build your resume. If possible,
        it is a great idea to post some code snippets and screenshots/videos of
        your projects on a website and link to that site on your resume (
        <a href="https://github.com" target="_blank">
          GitHub
        </a>{" "}
        is free and is great for this, and{" "}
        <a
          href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
          target="_blank"
        >
          markdown readme files
        </a>{" "}
        can be used to show screenshots and nicely formatted descriptions).
      </p>
      <p>
        I highly recommend starting a project in a language other than the one
        you're most experienced in, especially if you don't already have a lot
        of experience in more than one language.{" "}
        <a href="https://www.codecademy.com" target="_blank">
          Codecademy
        </a>{" "}
        has free courses on the basics of most languages to get you started. The
        language you choose should be based on what project you want to
        complete.
      </p>
      <p>
        Below are a few project examples. Click any project of interest to
        expand it and read more.
      </p>

      <h3>App and Web Development</h3>

      <ResumeProject
        title="iOS App"
        difficulty="Beginner"
        icons={[
          "assets/apple-logo.png",
          "assets/swiftui-logo.png",
          "assets/swift-logo.png",
        ]}
        description={
          <div>
            <p>
              This is a good project to choose if you want to showcase
              experience using Swift using a declarative programming paradigm.
              Sean Allen has a{" "}
              <a
                href="https://www.youtube.com/watch?v=MCLiPW2ns2w"
                target="_blank"
              >
                video walkthrough
              </a>{" "}
              for creating a simple iOS tic-tac-toe game using SwiftUI.
            </p>
            <p>
              If you <i>do</i> choose this project, then I highly recommend you
              also create a starting screen where the user can select a
              difficulty level of AI opponent (after you've fully implemented
              everything shown in the video and refactored everything into the
              MVVM pattern).
            </p>
          </div>
        }
      />

      <ResumeProject
        title="Android App"
        difficulty="Beginner"
        icons={[
          "assets/android-logo.png",
          "assets/compose-logo.png",
          "assets/kotlin-logo.png",
        ]}
        description={
          <div>
            <p>
              This is a good project to choose if you want to showcase
              experience using Kotlin using a declarative programming paradigm.
              Philipp Lackner has a{" "}
              <a
                href="https://www.youtube.com/watch?v=A7CGcFjQQtQ&t=633s"
                target="_blank"
              >
                video walkthrough
              </a>{" "}
              for creating a simple Android to-do app using Jetpack Compose.
            </p>
          </div>
        }
      />

      <ResumeProject
        title="Website"
        difficulty="Beginner"
        icons={[
          "assets/react-logo.png",
          "assets/typescript-logo.png",
          "assets/html-logo.png",
          "assets/css-logo.png",
        ]}
        description={
          <div>
            <p>
              This is a good project to choose if you want some experience with
              web development using a declarative programming paradigm.
            </p>
            <p>
              If you don't already know HTML, CSS, and either JavaScript or
              TypeScript, you will need to learn them. Programming with Mosh has
              an{" "}
              <a
                href="https://www.youtube.com/watch?v=qz0aGYrrlhU&list=PLijBK_3oP_H6MG6lU_8TZ5Q2DhXsKKGJ1&index=1&t=1895s"
                target="_blank"
              >
                HTML tutorial
              </a>
              . You can then follow a long with this quick Web Dev Simplified{" "}
              <a
                href="https://www.youtube.com/watch?v=1PnVor36_40&list=PLijBK_3oP_H6MG6lU_8TZ5Q2DhXsKKGJ1&index=4"
                target="_blank"
              >
                CSS tutorial
              </a>
              . JavaScript or TypeScript (I recommend TypeScript) can be learned
              for free on{" "}
              <a href="https://www.codecademy.com" target="_blank">
                Codecademy
              </a>
              .
            </p>
            <p>
              After familiarizing yourself with HTML, CSS, and
              JavaScript/TypeScript, you can follow along with Programming with
              Mosh's{" "}
              <a
                href="https://www.youtube.com/watch?v=SqcY0GlETPk&list=PLijBK_3oP_H6MG6lU_8TZ5Q2DhXsKKGJ1&index=2&t=809s"
                target="_blank"
              >
                React tutorial
              </a>
              .
            </p>
          </div>
        }
      />

      <h3>Video Game Development</h3>

      <ResumeProject
        title="Python Game"
        difficulty="Beginner"
        icons={["assets/pygame-logo.png", "assets/python-logo.png"]}
        description={
          <div>
            <p>
              This is a good project to choose if you want to showcase
              experience using Python. Coding with Russ has a{" "}
              <a
                href="https://www.youtube.com/watch?v=Vlolidaoiak&list=PLjcN1EyupaQnvpv61iriF8Ax9dKra-MhZ"
                target="_blank"
              >
                full series
              </a>{" "}
              for beginners who want to create video games in PyGame.
            </p>
          </div>
        }
      />

      <ResumeProject
        title="Unity Game"
        difficulty="Intermediate"
        icons={["assets/unity-logo.png", "assets/c-sharp-logo.png"]}
        description={
          <div>
            <p>
              This is a good project to choose if you want to showcase
              experience using C#. Brackeys has a{" "}
              <a
                href="https://www.youtube.com/watch?v=j48LtUkZRjU&list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6"
                target="_blank"
              >
                full series
              </a>{" "}
              for beginners who want to create video games in Unity.
            </p>
          </div>
        }
      />

      <ResumeProject
        title="SFML Game"
        difficulty="Advanced"
        icons={["assets/sfml-logo.png", "assets/cpp-logo.png"]}
        description={
          <div>
            <p>
              This is a good project to choose if you want to showcase
              experience using C++. Unlike Unity, SFML is <i>very</i> stripped
              down, giving the programmer much more control, but much less help
              in creating their games. This project should only be done after
              the Unity project.
            </p>
            <p>
              Hilze Vonck has a{" "}
              <a
                href="https://www.youtube.com/watch?v=axIgxBQVBg0&list=PL21OsoBLPpMOO6zyVlxZ4S4hwkY_SLRW9"
                target="_blank"
              >
                full series
              </a>{" "}
              for beginners who want to create video games using SFML.
            </p>
          </div>
        }
      />
    </>
  );
}

export default ResumeProjects;
