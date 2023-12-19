function StartingDotScanner() {
  return (
    <>
      <h2>Getting Started</h2>
      <h3>Dependencies</h3>
      <ul>
        <li>
          <a href="https://www.python.org/downloads/" target="_blank">
            Python 3
          </a>{" "}
          must be installed before Dot Scanner can be installed. Python 2 is not
          supported.
        </li>
      </ul>
      <h3>Installation</h3>
      <p>
        To install Dot Scanner, open a terminal window and run the following
        command:
      </p>
      <code>pip3 install dotscanner</code>
      <p>
        <em>
          (Note that the <code>pip</code> command may be required instead of{" "}
          <code>pip3</code> for some Python 3 installations.)
        </em>
      </p>
      <p>
        To update Dot Scanner to the latest version, run the following command{" "}
        <i>
          (again, using <code>pip</code> instead of <code>pip3</code> for some
          Python 3 installations)
        </i>
        :
      </p>
      <code>pip3 install dotscanner --upgrade</code>
      <p>
        Dot Scanner can also be uninstalled at any time using the following
        command{" "}
        <i>
          (again, using <code>pip</code> instead of <code>pip3</code> for some
          Python 3 installations)
        </i>
        :
      </p>
      <code>pip3 uninstall dotscanner</code>
      <h3>Running the Software</h3>
      <p>
        To launch the main graphical user interface (GUI), run the following
        command:
      </p>
      <code>dotscanner</code>
    </>
  );
}

export default StartingDotScanner;
