import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Intro from "./components/Intro";
import Advice from "./components/Advice";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route path="/advice" element={<Advice />} />
    </Routes>
  );
}

export default App;
