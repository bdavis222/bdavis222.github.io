function Configurations() {
  return (
    <>
      <h2>The Configurations Window</h2>
      <p>The first window displayed in the GUI is the Configurations Window:</p>
      <a href="assets/dotscanner/3.png">
        <img
          className="bordered-image"
          src="assets/dotscanner/3.png"
          alt="Configurations window image"
          loading="lazy"
        />
      </a>
      <p>
        If the File or Folder buttons are clicked, another window opens,
        allowing the user to select a file or folder for analysis:
      </p>
      <a href="assets/dotscanner/4.png">
        <img
          className="bordered-image"
          src="assets/dotscanner/4.png"
          alt="File browsing image"
          loading="lazy"
        />
      </a>
      <p>
        If repeated analysis is being performed at the same target filepath, the
        user can avoid continuously repeating this step by setting a default
        filepath. This is done by clicking the "Edit defaults" button. An entire
        configurations file is editable for other defaults as well. Any of the
        variables in this configurations file can be modified to change the
        default behavior of the software.
      </p>
      <p>
        The software will run as expected on any folder where the most common
        file extension within the folder belongs to the images wanting to be
        analyzed. By default, the entire folder will be scanned, and the most
        common file type found within the folder will be set as the file type to
        analyze. If the user is experiencing issues with the wrong file type
        being selected, it is recommended that they reorganize their data into
        folders containing only their images to be analyzed.
      </p>
      <p>
        If a folder containing several images is selected, the user has the
        option to change the default program from <b>Density</b> to{" "}
        <b>Lifetime</b>
        {". "}
        <em>
          (Note that trying to run a lifetime program on a single image will not
          be allowed by the software.){" "}
        </em>
        This selection is made through the <b>Program</b> dropdown menu:
      </p>
      <a href="assets/dotscanner/5.png">
        <img
          className="bordered-image"
          src="assets/dotscanner/5.png"
          alt="Selecting lifetime image"
          loading="lazy"
        />
      </a>
      <p>
        If <b>Lifetime</b> is selected, some additional options will appear:
      </p>
      <a href="assets/dotscanner/6.png">
        <img
          className="bordered-image"
          src="assets/dotscanner/6.png"
          alt="Lifetime options image"
          loading="lazy"
        />
      </a>
      <h3>Descriptions of Configuration Options</h3>
      <h4>Save Figures</h4>
      <p>
        Selecting this option will output graphical plots to a{" "}
        <code>figures</code> folder that will be created within the folder
        containing the data being analyzed. These plots serve to allow the user
        to quickly verify their selections made during analysis.
      </p>
      <h4>Blob size</h4>
      <p>
        This option sets the radius (or, more accurately, roughly the half width
        of a square) of exclusion around "blobs" (in pixels). Blobs are regions
        of the image that are saturated and overexposed. For example, if the
        blob size is set to 5, then a square region extending 5 pixels in each
        direction (left, right, up, and down) will be defined from each
        overexposed pixel (meaning the square will span 11 pixels on each side,
        including the central pixel), and all of the pixels within those regions
        will be ignored during analysis. This ensures that the “dots” (the
        dimmer particles of interest in the image) are not too close to any of
        these regions, and thus the outer edges of blobs are not confused as
        dots.
      </p>
      <h4>Dot size</h4>
      <p>
        Similar to the blob size option, this sets the size of a "dot" in the
        dataset. Because dots should not overlap, the larger the dot size, the
        fewer dots will be detected, as dimmer pixels within a brighter dot's
        region will not be recognized as dots, and will therefore be removed.
      </p>
      <h4>Thresholds</h4>
      <p>
        There are three thresholds that can be set to adjust the detection
        sensitivity for "dots" and "blobs" in a given image. The three editable
        text boxes correspond to the following variables (displayed from left to
        right in the Configurations Window):
      </p>
      <ul>
        <li>
          <code>LOWER_DOT_THRESH_SCALE</code>: Scaling for the lower threshold
          defining the brightness of the dots. The default is 1.5, which
          corresponds to 1.5 standard deviations above the mean of the data.
          Lower this value to increase the number of faint dots detected, or
          raise it to reduce the number.
        </li>
        <li>
          <code>UPPER_DOT_THRESH_SCALE</code>: Scaling for the upper threshold
          defining the brightness of the dots. The default is 5, which
          corresponds to 5 standard deviations above the mean. Lower this value
          to reduce the number of bright dots detected, or raise it to increase
          the number.
        </li>
        <li>
          <code>LOWER_BLOB_THRESH_SCALE</code>: Scaling for the lower threshold
          defining the brightness of the blobs. The default is 2, which
          corresponds to 2 times the value of{" "}
          <code>UPPER_DOT_THRESH_SCALE</code>. Lower this value to increase the
          number of blobs detected, or raise it to reduce the number.
        </li>
      </ul>
      <h4>Edit defaults</h4>
      <p>
        This opens a new window that allows the user to edit the default
        filepath or edit/reset the entire configuration file directly.
      </p>
      <h4>Use previous settings</h4>
      <p>
        This opens a new window that allows the user to browse for a previous
        .txt analysis file to use to repeat analysis. Information on which
        settings are reused during re-analysis is included in the header of each
        analysis file. There are two main scenarios for using this feature:
      </p>
      <ul>
        <li>
          <b>Re-analyzing the same image or set of images.</b>{" "}
          <i>
            This is useful if the user wants to tweak one or two parameters of
            an analysis without running through the entire folder of images one
            by one again.
          </i>
        </li>
        <li>
          <b>
            Analyzing a new image or set of images with the same analysis
            settings as a previous analysis.
          </b>
          <i>
            This is useful if the user has already run analysis on a set of
            green images and wants to run the exact same analysis on their red
            counterparts, for example.
          </i>
        </li>
      </ul>
      <p>
        Clicking Next, or pressing the return key on the keyboard, will save the
        user’s selections and open the Threshold Adjustment Window.
      </p>
      <h3>Descriptions of Configuration Options for the Lifetime Program</h3>
      <h4>Start image</h4>
      <p>
        This option sets the first image to be considered in a lifetime
        calculation. The default is the first image in the folder (as the images{" "}
        <em>must be numbered sequentially</em>).
      </p>
      <h4>Skips allowed</h4>
      <p>
        This sets the number of consecutive images that are allowed to be
        skipped in a lifetime calculation. This can be useful for dimmer dots
        where an image or two in a series are relatively out of focus, resulting
        in an unwanted non-detection for those frames. By increasing the number
        of skips allowed, these particles will be retained as long as they are
        back in focus and bright enough for detection in subsequent frames.
      </p>
      <h4>Remove edge frames</h4>
      <p>
        This dictates whether edge frames should be removed from a lifetime
        calculation. If a particle is detected in the first frame of an image,
        for example, it cannot be determined whether the particle existed before
        the first image was taken, so it might not make sense to include this in
        a lifetime calculation (and the same may also be true for particles in
        the last frame). If the number of skips allowed in the lifetime
        calculation is greater than zero, this will increase how many edge
        frames are removed from analysis.
      </p>
      <p>
        <i>
          Note: If the user is working with particularly noisy datasets where
          noise tends to be incorrectly marked as short-lived particles, the{" "}
          <code>LIFETIME_THRESHOLD</code> value in the configurations file can
          be adjusted to mark them as potentially unreliable in the output file.
        </i>
      </p>
    </>
  );
}

export default Configurations;
