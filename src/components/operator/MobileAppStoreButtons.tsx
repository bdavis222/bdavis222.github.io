import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";

interface Props {
  iosLink: string;
  androidLink: string;
}

function MobileAppStoreButtons({ iosLink, androidLink }: Props) {
  return (
    <div className="mobile-app-button-container">
      <AppStoreButton
        url={iosLink}
        theme={"dark"}
        className={"custom-app-store-btn"}
        title="Download for free!"
      />
      <GooglePlayButton
        url={androidLink}
        theme={"dark"}
        className={"custom-google-play-btn"}
        width={200}
        title="Download for free!"
      />
    </div>
  );
}

export default MobileAppStoreButtons;
