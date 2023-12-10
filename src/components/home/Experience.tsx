import CompanyInfo from "./CompanyInfo";

function Experience() {
  return (
    <>
      <h2 style={{ marginBottom: 25 }}>Experience</h2>
      <div className="company-card">
        <CompanyInfo
          name="Google"
          jobTitle="Software Engineer"
          dates="Apr 2022 - Present"
          icon="assets/google-name.png"
        />
        <ul className="company-achievements">
          <li>Developing features for Google Drive Android</li>
        </ul>
      </div>
      <div className="company-card">
        <CompanyInfo
          name="Penn State"
          jobTitle="Research Assistant"
          dates="Aug 2016 - Apr 2022"
          icon="assets/psu-name.png"
        />
        <ul className="company-achievements">
          <li>Ph.D. in astrophysics, 2022</li>
          <li>M.S. in astrophysics, 2018</li>
          <li>
            Ph.D. Thesis:{" "}
            <i>Late-stage Evolution of Low- and Intermediate-mass Stars</i>
          </li>
        </ul>
      </div>
      <div className="company-card">
        <CompanyInfo
          name="CU Boulder"
          jobTitle="Research Assistant"
          dates="Apr 2015 - May 2016"
          icon="assets/cu-name.png"
        />
        <ul className="company-achievements">
          <li>B.A. in astrophysics, 2016</li>
          <li>
            Honors Thesis:{" "}
            <i>
              Adaptive Optics-Assisted Integral Field Spectroscopy of NGC 5506
            </i>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
