interface Props {
  type: string;
  title: string;
  link: string;
  icon: string;
  description: string;
}

function ProfileCard({ type, title, link, icon, description }: Props) {
  return (
    <div className="profile-card-container">
      <a href={link} target="_blank">
        <div className={type + "-card"}>
          <div className="profile-image-container">
            <img
              className="profile-image"
              src="assets/headshot.png"
              alt="Headshot photo"
            />
          </div>
          <div className="profile-info-container">
            <p className="profile-name">{title}</p>
            <p className="profile-description">{description}</p>
          </div>
          <div className="profile-icon-container">
            <img className="profile-icon" src={icon} alt="Icon" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProfileCard;
