function Changing() {
  return (
    <>
      <h2>Making changes to your PyPI project</h2>
      <p>
        To make changes and update your project, simply re-run{" "}
        <code>pypimaker upload</code>. Follow the steps in the terminal to
        incremement your version number and your update will be pushed to PyPI.
      </p>
      <p>
        <i>
          Note: the extraneous +[CATransaction synchronize] output in the
          terminal window is a{" "}
          <a href="https://developer.apple.com/forums/thread/722889">
            known bug
          </a>{" "}
          in macOS that will not affect your project.
        </i>
      </p>
    </>
  );
}

export default Changing;
