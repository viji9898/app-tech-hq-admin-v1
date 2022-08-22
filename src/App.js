import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { EditorDashboard } from "./pages/EditorDashboard";
import { NavBar } from "./utils/navBar";

// Auth Control
import { AuthContext, AuthProvider } from "../src/utils/authContext";
import { useContext } from "react";
import { ProtectedRoute } from "./utils/protectRoute";

function App() {
  console.log(AuthContext);
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/*" element={<LandingPage />} />
          <Route
            exact
            path="/editor-dashboard"
            element={
              <ProtectedRoute>
                <EditorDashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
