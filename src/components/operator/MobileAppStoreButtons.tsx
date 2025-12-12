import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";
import React from "react";

const MobileAppStoreButtons: React.FC = () => {
  const iOSUrl = "https://www.apple.com/app-store/"; // Use App Store URL when available
  const androidUrl = "https://play.google.com/store/apps"; // Use Google Play URL when available

  return (
    <div className="mobile-app-button-container">
      <AppStoreButton
        url={iOSUrl}
        theme={"dark"}
        className={"custom-app-store-btn"}
      />
      <GooglePlayButton
        url={androidUrl}
        theme={"dark"}
        className={"custom-google-play-btn"}
        width={200}
      />
    </div>
  );
};

export default MobileAppStoreButtons;
