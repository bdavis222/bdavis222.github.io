import Card from "../Card";

function EducationalCards() {
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
          title="Software Engineering Roadmap"
          description="A guide for starting a software career"
          link="/#/roadmap"
          newTab
          image="assets/roadmap.png"
          icons={reactIcons}
        />
        <Card
          title="Interactive Python Course"
          description="An interactive beginner Python course"
          link="/#/python"
          newTab
          image="assets/python.png"
          icons={pythonCourseIcons}
        />
        <Card
          title="Mobile Python Course"
          description="A mobile-friendly beginner Python course"
          link="/#/python-course-mobile"
          newTab
          image="assets/python.png"
          icons={pythonCourseIcons}
        />
      </div>
    </>
  );
}

export default EducationalCards;