import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Releases from "./components/Releases";
import DotScanner from "./components/dotscanner/DotScanner";
import PypiMaker from "./components/pypimaker/PypiMaker";
import Operator from "./components/operator/Operator";
import Gravity from "./components/gravity/Gravity";
import Roadmap from "./components/roadmap/Roadmap";
import PythonLanding from "./components/roadmap/PythonLanding";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import CopyrightPolicy from "./components/CopyrightPolicy";
import TermsOfService from "./components/TermsOfService";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Releases />} />
          <Route path="/about" element={<About />} />
          <Route path="/dotscanner" element={<DotScanner />} />
          <Route path="/pypimaker" element={<PypiMaker />} />
          <Route path="/operator" element={<Operator />} />
          <Route path="/gravity" element={<Gravity />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/python" element={<PythonLanding />} />
          <Route path="/copyright" element={<CopyrightPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
