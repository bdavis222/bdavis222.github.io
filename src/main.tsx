import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Releases from "../public/assets/components/Releases";
import DotScanner from "../public/assets/components/dotscanner/DotScanner";
import PypiMaker from "../public/assets/components/pypimaker/PypiMaker";
import Operator from "../public/assets/components/operator/Operator";
import Gravity from "../public/assets/components/gravity/Gravity";
import Roadmap from "../public/assets/components/roadmap/Roadmap";
import PythonLanding from "../public/assets/components/roadmap/PythonLanding";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Releases />} />
          <Route path="dotscanner" element={<DotScanner />} />
          <Route path="pypimaker" element={<PypiMaker />} />
          <Route path="operator" element={<Operator />} />
          <Route path="gravity" element={<Gravity />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="python" element={<PythonLanding />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
