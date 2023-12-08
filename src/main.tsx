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
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/about/About";
import Home from "./components/Home";
import PythonLanding from "./components/python-course/PythonLanding";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/software" element={<Releases />} />
          <Route path="/dotscanner" element={<DotScanner />} />
          <Route path="/pypimaker" element={<PypiMaker />} />
          <Route path="/operator" element={<Operator />} />
          <Route path="/gravity" element={<Gravity />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/python" element={<PythonLanding />} />
        </Routes>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
