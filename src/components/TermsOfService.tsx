import Footer from "./Footer";

function TermsOfService() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p>
        Your permission to use this website is subject to the following terms.
        This permission is not exclusive, but exists on a per-person basis. This
        permission also cannot be transferred to any other party, as anyone
        using this website must agree to these terms themselves.
      </p>
      <h2>Acceptable use</h2>
      <ul>
        <li>You may not use this website to break the law</li>
        <li>
          You may not falsely claim or imply that you are associated with this
          website
        </li>
        <li>You may not hyperlink to images on this website</li>
        <li>
          You may not show portions of this website on any other website using
          iframes
        </li>
      </ul>
      <h2>Questions about acceptable use</h2>
      <p>
        Any questions about acceptable use can be sent via{" "}
        <a href="https://github.com/bdavis222/bdavis222.github.io/issues">
          this GitHub issues page
        </a>
        . Note that a GitHub profile is required to post to GitHub issues pages.
        GitHub profiles are free to create, if you do not already have one.
      </p>
      <hr />
      <Footer />
    </>
  );
}

export default TermsOfService;
