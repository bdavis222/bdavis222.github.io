import Card from "../Card";

function WebsiteCards() {
  const reactIcons = [
    "assets/react-logo.png",
    "assets/typescript-logo.png",
    "assets/html-logo.png",
    "assets/css-logo.png",
  ];
  return (
    <>
      <div className="row">
        <Card
          title="Lake Conroe RV Site"
          description="The company website for Lake Conroe RV Resort"
          link="https://www.lakeconroervresort.com"
          newTab
          image="assets/lake-conroe.png"
          icons={reactIcons}
        />
      </div>
    </>
  );
}

export default WebsiteCards;
