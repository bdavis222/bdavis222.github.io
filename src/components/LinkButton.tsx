interface Props {
  label: string;
  link: string;
  color: string;
}

function LinkButton({ label, link, color = "" }: Props) {
  return (
    <div className="link-button-container">
      <a href={link} className={"link-button " + color}>
        {label}
      </a>
    </div>
  );
}

export default LinkButton;
