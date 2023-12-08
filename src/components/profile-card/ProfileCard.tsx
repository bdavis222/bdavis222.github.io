interface Props {
  type: string;
  link: string;
  icon: string;
  description: string;
}

function ProfileCard({ type, link, icon, description }: Props) {
  return (
    <>
      <div className="profile-card-container">
        <a href={link} target="_blank">
          <div className={type + "-card"}>
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
