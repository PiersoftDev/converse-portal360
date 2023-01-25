import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import "./common/styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/landing_page/landing_page";
import { VendorOnboarding } from "./components/vendor/vendor_onboarding";

function App() {
  return (
    <Routes>
      {/* Header */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<LandingPage />} />
      {/* Footer */}
    </Routes>
  );
}

export default App;
