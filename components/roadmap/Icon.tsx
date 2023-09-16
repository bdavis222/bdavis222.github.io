interface Props {
  type: String;
}

function Icon({ type }: Props) {
  const url = "src/assets/" + type + ".png";
  const altString = type + " icon";
  return <img className="icon" src={url} alt={altString} />;
}

export default Icon;