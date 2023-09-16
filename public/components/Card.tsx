interface Props {
  link: string;
  image: string;
  icons: string[];
  title: string;
  description: string;
}

function Card({ link, image, icons, title, description }: Props) {
  const altText = title + " image";
  return (
    <>
      <div className="column">
        <a href={link} className="card-link">
          <div className="card">
            <img className="card-image" src={image} alt={altText} />
            <div className="card-container">
              <h3 className="card-title">
                <b>{title} </b>
                {icons.map((icon) => (
                  <img className="icon" src={icon} alt="icon logo" />
                ))}
              </h3>
              <p className="card-description">{description}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;