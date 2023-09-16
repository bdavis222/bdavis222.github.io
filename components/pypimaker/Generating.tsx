function Generating() {
  return (
    <>
      <h2>Generating Your PyPI Files</h2>
      <p>
        To generate the files needed for your PyPI package, run the following
        command:
      </p>
      <code>pypimaker generate</code>
      <p>
        This will launch a graphical user interface that looks like the
        following:
      </p>
      <a href="src/assets/pypimaker/0.png">
        <img
          className="bordered-image"
          src="src/assets/pypimaker/0.png"
          alt="Main GUI image"
          loading="lazy"
        />
      </a>
      <p>
        Inputting the information for your project will generate all of the
        files needed for uploading it to PyPI (<code>LICENSE</code>,{" "}
        <code>README.me</code>, <code>requirements.txt</code>, and{" "}
        <code>setup.py</code>). This can be re-run at any time to re-generate
        these files.
      </p>
    </>
  );
}

export default Generating;
