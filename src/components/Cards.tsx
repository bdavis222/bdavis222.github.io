import Card from "./Card";

function Cards() {
  return (
    <>
      <div className="row">
        <Card
          link="/#/dotscanner"
          image="assets/dotscanner.png"
          icons={["assets/python-logo.png"]}
          title="Dot Scanner"
          description="Software designed for analysis of microscope imaging data"
        />
        <Card
          link="/#/roadmap"
          image="assets/roadmap.png"
          icons={[
            "assets/react-logo.png",
            "assets/typescript-logo.png",
            "assets/html-logo.png",
            "assets/css-logo.png",
          ]}
          title="Software Engineering Roadmap"
          description="A website that guides people pursuing programming jobs"
        />
        <Card
          link="/#/operator"
          image="assets/operator.png"
          icons={[
            "assets/apple-logo.png",
            "assets/swiftui-logo.png",
            "assets/swift-logo.png",
          ]}
          title="Operator"
          description="An original math puzzle game with procedurally generated levels"
        />
        <Card
          link="/#/gravity"
          image="assets/gravity.png"
          icons={["assets/cpp-logo.png"]}
          title="Gravity"
          description="A game for space travel enthusiasts"
        />
        <Card
          link="/#/pypimaker"
          image="assets/pypimaker.png"
          icons={["assets/python-logo.png"]}
          title="PyPI Maker"
          description="Software designed for simplifying PyPI Python package setups"
        />
      </div>
    </>
  );
}

export default Cards;
