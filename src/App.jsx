import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
