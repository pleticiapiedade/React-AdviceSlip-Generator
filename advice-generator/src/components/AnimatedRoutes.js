import React from "react";
import { Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Intro from "../pages/Intro";
import Advice from "../pages/Advice";

function AnimatedRoutes() {

  return (
    <AnimatePresence>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/advice" element={<Advice />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
