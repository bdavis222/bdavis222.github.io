interface Props {
  type: String;
}

function Icon({ type }: Props) {
  const url = "assets/" + type + ".png";
  const altString = type + " icon";
  return <img className="black-icon" src={url} alt={altString} />;
}

export default Icon;
