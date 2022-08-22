import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { EditorDashboard } from "./pages/EditorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/*" element={<LandingPage />} />
        <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
        <Route exact path="/editor-dashboard" element={<EditorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
