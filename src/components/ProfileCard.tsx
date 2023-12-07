interface Props {
  link: string;
  icon: string;
  description: string;
  color: string;
}

function ProfileCard({ link, icon, description, color }: Props) {
  return (
    <>
      <div className="profile-card-container">
        <a href={link}>
          <div className="profile-card" style={{ backgroundColor: color }}>
            <img
              className="profile-image"
              src="assets/headshot.png"
              alt="Headshot photo"
            />
            <p className="profile-name">Brian Davis</p>
            <p className="profile-title">{description}</p>
            <img className="profile-icon" src={icon} alt="Icon" />
          </div>
        </a>
      </div>
    </>
  );
}

export default ProfileCard;
