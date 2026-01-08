import Card from "../Card";

function GameCards() {
  const iosIcons = [
    "assets/apple-logo.png",
    "assets/swiftui-logo.png",
    "assets/swift-logo.png",
  ];
  const androidIcons = [
    "assets/android-logo.png",
    "assets/compose-logo.png",
    "assets/kotlin-logo.png",
  ];
  return (
    <>
      <div className="row">
        <Card
          title="Operator"
          description="An original math puzzle game with procedurally generated levels"
          link="/#/operator"
          image="assets/operator-card-banner.png"
          icons={iosIcons.concat(androidIcons)}
        />
        <Card
          title="Gravity"
          description="An original spaceflight game with a built-in level editor"
          link="/#/gravity"
          image="assets/gravity.png"
          icons={["assets/sfml-logo.png", "assets/cpp-logo.png"]}
        />
      </div>
    </>
  );
}

export default GameCards;
