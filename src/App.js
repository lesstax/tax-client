import "./App.css";
import LoginOrRegistraion from "./components/LoginOrRegistraion";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
function App() {
  return (
    <Router>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route
            path="/login-or-registration"
            element={<LoginOrRegistraion />}
          />
        </Routes>
      </CssBaseline>
    </Router>
  );
}

export default App;
