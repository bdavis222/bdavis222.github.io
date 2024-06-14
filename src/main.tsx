import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Releases from "./components/software/Releases";
import DotScanner from "./components/dotscanner/DotScanner";
import PypiMaker from "./components/pypimaker/PypiMaker";
import Operator from "./components/operator/Operator";
import Gravity from "./components/gravity/Gravity";
import Roadmap from "./components/roadmap/Roadmap";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/home/Home";
import PythonLanding from "./components/python-course/PythonLanding";
import Publications from "./components/publications/Publications";
import PythonCourseMobile from "./components/python-course/PythonCourseMobile";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Releases />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/dotscanner" element={<DotScanner />} />
          <Route path="/pypimaker" element={<PypiMaker />} />
          <Route path="/operator" element={<Operator />} />
          <Route path="/gravity" element={<Gravity />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/python" element={<PythonLanding />} />
          <Route
            path="/python-course-mobile"
            element={<PythonCourseMobile />}
          />
        </Routes>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
