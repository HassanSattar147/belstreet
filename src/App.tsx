// import React from "react";
import "./App.css";
import EvaluationPage from "./components/EvaluationPage";
import SearchPage from "./components/SearchPage";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search-page" element={<SearchPage />} />
      <Route path="/evaluation-page" element={<EvaluationPage />} />
    </Routes>
  );
}

export default App;
