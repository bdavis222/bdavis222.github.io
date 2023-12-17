function RegionSelection() {
  return (
    <>
      <h2>The Region Selector Window</h2>
      <p>
        Clicking the Done button, or pressing the return key on the keyboard,
        from the main Threshold Adjustment Window saves the threshold settings
        selected by the user and advances to the Region Selector Window:
      </p>
      <a href="assets/dotscanner/9.png">
        <img
          className="bordered-image"
          src="assets/dotscanner/9.png"
          alt="Region selection image"
          loading="lazy"
        />
      </a>
      <p>
        This window allows the user to click different locations on the image to
        set the vertices of a polygon within which the measurements will be
        made. At any point, the polygon can be reset by clicking the Reset
        button, or by pressing the backspace key on the keyboard. It is
        important to note that after at least three vertices have been placed,
        the dotted line shows how the program will enclose the polygon once the
        Done button, or the return key on the keyboard, is pressed. (In other
        words, it is not necessary to re-click the first vertex created to close
        the polygon.)
      </p>
      <p>
        Information about the image processing will be displayed in the
        terminal, including progress bars to estimate the time to completion of
        longer processes, like lifetime calculations and the saving of multiple
        figures.
      </p>
      <p>
        <em>
          Note: the extraneous +[CATransaction synchronize] output in the
          terminal window is a{" "}
          <a href="https://developer.apple.com/forums/thread/722889">
            known bug
          </a>{" "}
          in macOS that will not affect your data.
        </em>
      </p>
    </>
  );
}

export default RegionSelection;
