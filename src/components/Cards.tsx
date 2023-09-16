import Card from "./Card";

function Cards() {
  return (
    <>
      <div className="row">
        <Card
          link="dotscanner"
          image="src/assets/dotscanner.png"
          icons={["src/assets/python-logo.png"]}
          title="Dot Scanner"
          description="Software designed for analysis of microscope imaging data"
        />
        <Card
          link="roadmap"
          image="src/assets/roadmap.png"
          icons={[
            "src/assets/react-logo.png",
            "src/assets/typescript-logo.png",
            "src/assets/html-logo.png",
            "src/assets/css-logo.png",
          ]}
          title="Software Engineering Roadmap"
          description="A website that guides people pursuing programming jobs"
        />
        <Card
          link="operator"
          image="src/assets/operator.png"
          icons={[
            "src/assets/apple-logo.png",
            "src/assets/swiftui-logo.png",
            "src/assets/swift-logo.png",
          ]}
          title="Operator"
          description="An original math puzzle game with procedurally generated levels"
        />
        <Card
          link="gravity"
          image="src/assets/gravity.png"
          icons={["src/assets/cpp-logo.png"]}
          title="Gravity"
          description="A game for space travel enthusiasts"
        />
        <Card
          link="pypimaker"
          image="src/assets/pypimaker.png"
          icons={["src/assets/python-logo.png"]}
          title="PyPI Maker"
          description="Software designed for simplifying PyPI Python package setups"
        />
      </div>
    </>
  );
}

export default Cards;
