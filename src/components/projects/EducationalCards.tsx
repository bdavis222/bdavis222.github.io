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
  const mobilePythonCourseIcons = [
    "assets/jupyter-logo.png",
    "assets/python-logo.png",
    "assets/react-logo.png",
    "assets/typescript-logo.png",
    "assets/javascript-logo.png",
    "assets/html-logo.png",
    "assets/css-logo.png",
  ];
  return (
    <>
      <div className="row">
        <Card
          title="Interactive Python Course"
          description="An interactive beginner Python course"
          link="/#/python"
          image="assets/python.png"
          icons={pythonCourseIcons}
        />
        <Card
          title="Mobile Python Course"
          description="A mobile-friendly beginner Python course"
          link="/#/python-course-mobile"
          image="assets/python-mobile.png"
          icons={mobilePythonCourseIcons}
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

export default EducationalCards;
