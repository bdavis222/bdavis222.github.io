function Uploading() {
  return (
    <>
      <h2>Uploading Your Finished Project to PyPI</h2>
      <p>
        If you don't yet have an account on PyPI,{" "}
        <a href="https://pypi.org/account/register/">register for one</a>. Once
        you've set up your account and you're ready to upload your package to
        PyPI (e.g., after you have updated the generated template README.md file
        to your liking), run the following command:
      </p>
      <code>pypimaker upload</code>
      <p>
        You will be asked to enter your PyPI username and password (which you've
        registered previously) in the terminal. Your project will then be
        uploaded to PyPI, and others can download it using the following
        command:
      </p>
      <code>pip install &lt;PROJECT_NAME&gt;</code>
      <p>
        <i>
          (Here, <code>&lt;PROJECT_NAME&gt;</code> is the name you selected when
          running pypimaker generate.)
        </i>
      </p>
    </>
  );
}

export default Uploading;
