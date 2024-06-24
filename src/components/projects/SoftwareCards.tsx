import Card from "../Card";

function SoftwareCards() {
  const iosIcons = [
    "assets/apple-logo.png",
    "assets/swiftui-logo.png",
    "assets/swift-logo.png",
  ];
  return (
    <>
      <div className="row">
        <Card
          title="Dot Scanner"
          description="Software designed for analysis of microscope imaging data"
          link="/#/dotscanner"
          newTab
          image="assets/dotscanner.png"
          icons={["assets/python-logo.png"]}
        />
        <Card
          title="Operator"
          description="An original math puzzle game with procedurally generated levels"
          link="/#/operator"
          newTab
          image="assets/operator.png"
          icons={iosIcons}
        />
        <Card
          title="Gravity"
          description="An original spaceflight game with a built-in level editor"
          link="/#/gravity"
          newTab
          image="assets/gravity.png"
          icons={["assets/cpp-logo.png"]}
        />
        <Card
          title="PyPI Maker"
          description="Software designed for simplifying PyPI Python package setups"
          link="/#/pypimaker"
          newTab
          image="assets/pypimaker.png"
          icons={["assets/python-logo.png"]}
        />
        <Card
          title="Crater Sim"
          description="Software for simulating crater saturation on celestial bodies"
          link="/#/cratersim"
          newTab
          image="assets/crater-sim.png"
          icons={["assets/python-logo.png"]}
        />
        <Card
          title="RC Spec"
          description="Software for quick analysis of amateur stellar spectra"
          link="/#/rcspec"
          newTab
          image="assets/rc-spec.png"
          icons={["assets/python-logo.png"]}
        />
      </div>
    </>
  );
}

export default SoftwareCards;
