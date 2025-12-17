import Card from "../Card";

function UtilityCards() {
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
          title="Quick Spec"
          description="Software for quick analysis of amateur stellar spectra"
          link="/#/quickspec"
          newTab
          image="assets/quick-spec.png"
          icons={["assets/python-logo.png"]}
        />
      </div>
    </>
  );
}

export default UtilityCards;
