interface Props {
  label: string;
  link: string;
  color: string;
  newTab?: boolean;
}

function LinkButton({ label, link, color = "", newTab = false }: Props) {
  return (
    <div className="link-button-container">
      <a
        href={link}
        target={newTab ? "_blank" : "_self"}
        className={"link-button " + color}
      >
        {label}
      </a>
    </div>
  );
}

export default LinkButton;
