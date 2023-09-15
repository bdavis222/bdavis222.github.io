function ThresholdAdjustment() {
  return (
    <>
      <h2>The Threshold Adjustment Window</h2>
      <p>
        Clicking the Next button, or pressing the return key on the keyboard,
        from the Configurations Window saves the configuration settings selected
        by the user and advances to the Threshold Adjustment Window. This window
        shows the image data with the dots and blobs identified, and features
        several button groups on the left sidebar:
      </p>
      <a href="src/assets/dotscanner/7.png">
        <img
          className="bordered-image"
          src="src/assets/dotscanner/7.png"
          alt="Threshold adjustment image"
          loading="lazy"
        />
      </a>
      <p>
        From top to bottom, these button groups perform the following actions:
      </p>
      <h4>View</h4>
      <p>
        These buttons allow four different viewing options: zooming in on the
        top left, top right, bottom left, bottom right, or zooming back out to
        show the full image. The user can also press the spacebar on the
        keyboard to cycle through these different views.
      </p>
      <h4>Contrast</h4>
      <p>These buttons adjust the contrast of the image.</p>
      <h4>Dots</h4>
      <p>
        These buttons adjust the sensitivity for detecting “dots” in the image
        (the fainter, smaller dots, as opposed to the much brighter and larger
        “blobs”). The user can also press the up and down arrow keys on the
        keyboard to make these adjustments.
      </p>
      <h4>Blobs</h4>
      <p>
        These buttons adjust the sensitivity for detecting “blobs” in the image.
        The user can also press the right and left arrow keys on the keyboard to
        make these adjustments.{" "}
        <em>
          Note: since increasing the blob sensitivity changes the threshold
          between blobs and dots, this results in a different number of dots
          being detected as well.
        </em>
      </p>
      <h4>Edit</h4>
      <p>
        This button changes the left button bar view to display some manual
        threshold and size adjustment options:
      </p>
      <a href="src/assets/dotscanner/8.png">
        <img
          className="bordered-image"
          src="src/assets/dotscanner/8.png"
          alt="Threshold adjustment edit image"
          loading="lazy"
        />
      </a>
      <p>
        <em>
          (Once the thresholds or sizes are changed by entering new numbers into
          the text boxes, clicking the Done button, or pressing the return key
          on the keyboard, saves the settings and returns the left button bar to
          the original button configuration.)
        </em>
      </p>
      <h4>Reset</h4>
      <p>
        This button resets the adjusted thresholds back to the default values.
      </p>
      <h4>Skip</h4>
      <p>
        This button skips the current image (for example, if the user decides
        the data quality is not sufficient for measurement). The escape key on
        the keyboard can also be pressed to perform a skip.
      </p>
    </>
  );
}

export default ThresholdAdjustment;
