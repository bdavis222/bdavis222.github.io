import Card from "../Card";

function UtilityCards() {
  return (
    <>
      <div className="row">
        <Card
          title="Dot Scanner"
          description="Software designed for analysis of microscope imaging data"
          link="/#/dotscanner"
          image="assets/dotscanner.png"
          icons={["assets/python-logo.png"]}
        />
        <Card
          title="PyPI Maker"
          description="Software designed for simplifying PyPI Python package setups"
          link="/#/pypimaker"
          image="assets/pypimaker.png"
          icons={["assets/python-logo.png"]}
        />
        <Card
          title="Crater Sim"
          description="Software for simulating crater saturation on celestial bodies"
          link="/#/cratersim"
          image="assets/crater-sim.png"
          icons={["assets/python-logo.png"]}
        />
        <Card
          title="Quick Spec"
          description="Software for quick analysis of amateur stellar spectra"
          link="/#/quickspec"
          image="assets/quick-spec.png"
          icons={["assets/python-logo.png"]}
        />
      </div>
    </>
  );
}

export default UtilityCards;
