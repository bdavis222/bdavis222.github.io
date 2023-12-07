function ProfileCard() {
  return (
    <>
      <div className="profile-card-container">
        <a href="https://www.linkedin.com/in/briandavis123/">
          <div className="profile-card">
            <img
              className="profile-image"
              src="assets/headshot.png"
              alt="Headshot photo"
            />
            <p className="profile-name">Brian Davis</p>
            <p className="profile-title">Software Engineer</p>
            <img
              className="profile-icon"
              src="assets/linkedin-logo.png"
              alt="LinkedIn logo"
            />
          </div>
        </a>
      </div>
    </>
  );
}

export default ProfileCard;
