import Card from "./Card";

function Cards() {
  const iosIcons = [
    "assets/apple-logo.png",
    "assets/swiftui-logo.png",
    "assets/swift-logo.png",
  ];
  const reactIcons = [
    "assets/react-logo.png",
    "assets/typescript-logo.png",
    "assets/html-logo.png",
    "assets/css-logo.png",
  ];
  const pythonCourseIcons = [
    "assets/jupyter-logo.png",
    "assets/python-logo.png",
  ];
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
          title="Operator"
          description="An original math puzzle game with procedurally generated levels"
          link="/#/operator"
          image="assets/operator.png"
          icons={iosIcons}
        />
        <Card
          title="Gravity"
          description="An original spaceflight game with a built-in level editor"
          link="/#/gravity"
          image="assets/gravity.png"
          icons={["assets/cpp-logo.png"]}
        />
        <Card
          title="Lake Conroe RV Site"
          description="The company website for Lake Conroe RV Resort"
          link="https://www.lakeconroervresort.com"
          newTab
          image="assets/lake-conroe.png"
          icons={reactIcons}
        />
        <Card
          title="Intro Python Course"
          description="An interactive Python course for beginners"
          link="/#/python"
          image="assets/python.png"
          icons={pythonCourseIcons}
        />
        <Card
          title="Software Engineering Roadmap"
          description="A guide for starting a software career"
          link="/#/roadmap"
          image="assets/roadmap.png"
          icons={reactIcons}
        />
      </div>
    </>
  );
}

export default Cards;
