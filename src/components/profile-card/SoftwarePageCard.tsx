function SoftwarePageCard() {
  return (
    <>
      <div className="profile-card-container">
        <a href="/#/software">
          <div className="software-page-card">
            <img
              className="profile-image"
              src="assets/headshot.png"
              alt="Headshot photo"
            />
            <p className="profile-name">Software</p>
            <p className="profile-description">Portfolio page</p>
            <img
              className="profile-icon"
              src="assets/android-chrome-512x512.png"
              alt="Icon"
            />
          </div>
        </a>
      </div>
    </>
  );
}

export default SoftwarePageCard;
