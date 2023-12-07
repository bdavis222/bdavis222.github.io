function DonateButton() {
  return (
    <>
      <div className="donate-button-container">
        <div className="center-in-donate-button-container">
          <a
            href="https://www.paypal.com/donate/?business=UA5NL9MJSFMVY"
            target="_blank"
          >
            <img
              className="donate-button"
              src="https://img.shields.io/badge/Donate-PayPal-green.svg"
              alt="Donate button"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default DonateButton;
