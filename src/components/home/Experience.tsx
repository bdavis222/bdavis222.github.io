import CompanyCard from "./CompanyCard";

function Experience() {
  return (
    <>
      <h2 style={{ marginBottom: 25 }}>Experience</h2>
      <CompanyCard
        name="Google"
        jobTitle="Software Engineer"
        dates="Apr 2022 - Present"
        icon="assets/google-name.png"
        accomplishments={[
          <li>Developing features for Google Drive Android</li>,
          <li>Promoted for high performance and leadership (2024)</li>,
          <li>Leading projects for several organizational priorities</li>,
          <li>Earned Google readability in multiple languages</li>,
        ]}
        skills={[
          "Java",
          "Kotlin",
          "Python",
          "Android",
          "Jetpack Compose",
          "Unit Testing",
          "Clean Architecture",
          "Model-View-ViewModel (MVVM)",
          "Model-View-Presenter (MVP)",
          "Android Studio",
          "SQL",
          "Bash",
          "Unix",
          "macOS",
        ]}
      />
      <CompanyCard
        name="Penn State"
        jobTitle="Research Assistant"
        dates="Aug 2016 - Apr 2022"
        icon="assets/psu-name.png"
        accomplishments={[
          <li>Ph.D. in astrophysics, 2022</li>,
          <li>M.S. in astrophysics, 2018</li>,
          <li>
            Ph.D. Thesis:{" "}
            <i>Late-stage Evolution of Low- and Intermediate-mass Stars</i>
          </li>,
        ]}
        skills={[
          "Python",
          "C++",
          "JavaScript",
          "SQL",
          "R",
          "Unit Testing",
          "Bash",
          "Unix",
          "LaTeX",
          "Image Processing",
          "Computational Physics",
          "Mathematical Modeling",
          "Physics",
          "Astrophysics",
          "Astronomy",
          "Research",
          "Scientific Writing",
          "Teaching",
          "Public Speaking",
          "macOS",
          "Windows",
        ]}
      />
      <CompanyCard
        name="CU Boulder"
        jobTitle="Research Assistant"
        dates="Apr 2015 - May 2016"
        icon="assets/cu-name.png"
        accomplishments={[
          <li>B.A. in astrophysics, 2016</li>,
          <li>
            Honors Thesis:{" "}
            <i>
              Adaptive Optics-Assisted Integral Field Spectroscopy of NGC 5506
            </i>
          </li>,
        ]}
        skills={[
          "Python",
          "Bash",
          "Unix",
          "LaTeX",
          "Image Processing",
          "Computational Physics",
          "Mathematical Modeling",
          "Physics",
          "Astrophysics",
          "Astronomy",
          "Research",
          "Scientific Writing",
          "Public Speaking",
          "macOS",
        ]}
      />
    </>
  );
}

export default Experience;
