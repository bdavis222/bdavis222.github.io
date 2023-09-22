import Footer from "./Footer";

function CopyrightPolicy() {
  return (
    <>
      <h1>Copyright Policy</h1>
      <p>
        This page describes how copyright infringement claims are handled. In
        short, the{" "}
        <a href="https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">
          Digital Millennium Copyright Act (DMCA)
        </a>{" "}
        is generally followed.
      </p>
      <h2>What is the DMCA?</h2>
      <p>
        From the Wikipedia page (as of September 2023),{" "}
        <i>
          "the Digital Millennium Copyright Act (DMCA) is a 1998 United States
          copyright law that implements two 1996 treaties of the World
          Intellectual Property Organization (WIPO). It criminalizes production
          and dissemination of technology, devices, or services intended to
          circumvent measures that control access to copyrighted works (commonly
          known as digital rights management or DRM). It also criminalizes the
          act of circumventing an access control, whether or not there is actual
          infringement of copyright itself. In addition, the DMCA heightens the
          penalties for copyright infringement on the Internet."
        </i>
      </p>
      <p>
        The DMCA allows users to submit something called a "takedown notice" to
        inform another party that the content on their website violated a
        copyright.
      </p>
      <h2>Should I send a takedown notice?</h2>
      <p>
        If you aren't absolutely sure that you own a copyright, or that material
        on this site infringes on a copyright, speak to an attorney before
        sending a DMCA takedown notice. Misrepresentations about infringement in
        a takedown notice can make you liable for significant damages, including
        costs and attorney fees. A lawyer can help you decide if you should file
        a takedown notice, and if so, help you prepare it correctly.
        <h2>Where do I send a takedown notice?</h2>
        <p>
          All notices should be sent via{" "}
          <a href="https://github.com/bdavis222/bdavis222.github.io/issues">
            this GitHub issues page
          </a>
          . Note that a GitHub profile is required to post to GitHub issues
          pages. GitHub profiles are free to create, if you do not already have
          one.
        </p>
      </p>
      <hr />
      <Footer />
    </>
  );
}

export default CopyrightPolicy;
