interface Props {
  link: string;
  newTab?: boolean;
  image: string;
  icons: string[];
  title: string;
  description: string;
}

function Card({
  link,
  newTab = false,
  image,
  icons,
  title,
  description,
}: Props) {
  const altText = title + " image";
  return (
    <>
      <div className="column">
        <a
          href={link}
          className="card-link"
          target={newTab ? "_blank" : "_self"}
        >
          <div className="card">
            <img className="card-image" src={image} alt={altText} />
            <div className="card-container">
              <h3 className="card-title">
                <b>{title}</b>
              </h3>
              <p className="card-description">{description}</p>
              <div className="card-icon-row">
                {icons.map((icon) => (
                  <img className="card-icon" src={icon} alt="icon logo" />
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;
