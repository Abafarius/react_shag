import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { pageTransition } from "./styles/pageTransitions";
import Navbar from "./components/Navbar";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><Home /></motion.div>}
        />
        <Route
          path="/projects"
          element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><Projects /></motion.div>}
        />
        <Route
          path="/about"
          element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><About /></motion.div>}
        />
        <Route
          path="/contact"
          element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><Contact /></motion.div>}
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
