// import React from "react";
import "./App.css";
import EvaluationPage from "./components/EvaluationPage";
import SearchPage from "./components/SearchPage";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search-page" element={<SearchPage />} />
      <Route path="/evaluation-page" element={<EvaluationPage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
