import GitHubCard from "../profile-card/GitHubCard";
import LinkedInCard from "../profile-card/LinkedInCard";

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <h3 style={{ marginTop: 0, marginBottom: -10 }}>GitHub</h3>
      <p>
        Feel free to visit my GitHub page and see my public repositories. I
        enjoy collaboration with others on personal projects!
      </p>
      <GitHubCard />
      <h3 style={{ marginTop: 30, marginBottom: -10 }}>LinkedIn</h3>
      <p>
        If you have any questions, or wish to contact me, feel free to message
        me on LinkedIn:
      </p>
      <LinkedInCard />
    </>
  );
}

export default Contact;
