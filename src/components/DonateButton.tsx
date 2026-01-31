interface Props {
  link: string;
}

function DonateButton({ link }: Props) {
  return (
    <>
      <div className="donate-button-container">
        <div className="center-in-donate-button-container">
          <a href={link}>
            <img
              className="donate-button"
              src="assets/paypal-donate-button-img.png"
              alt="Donate button"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default DonateButton;
