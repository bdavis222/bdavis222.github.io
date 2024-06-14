interface Props {
  previousLessonLink?: string;
  nextLessonLink?: string;
  hideLessonsLink?: boolean;
}

function PythonCourseMobileFooter({
  previousLessonLink = "",
  nextLessonLink = "",
  hideLessonsLink = false,
}: Props) {
  const year: number = new Date().getFullYear();
  return (
    <>
      <hr />
      <p className="footer-nav">
        {previousLessonLink && (
          <a href={previousLessonLink}>
            &lt; {hideLessonsLink ? "Previous lesson" : "Previous"}
          </a>
        )}
        {!hideLessonsLink && previousLessonLink && <>&nbsp; | &nbsp;</>}
        {!hideLessonsLink && <a href="/#/python-course-mobile">Lessons</a>}
        {!hideLessonsLink && nextLessonLink && <>&nbsp; | &nbsp;</>}
        {nextLessonLink && (
          <a href={nextLessonLink}>
            {hideLessonsLink ? "Next lesson" : "Next"} &gt;
          </a>
        )}
      </p>
      <footer>&copy; Copyright {year} Brian Davis. All Rights Reserved.</footer>
    </>
  );
}

export default PythonCourseMobileFooter;
