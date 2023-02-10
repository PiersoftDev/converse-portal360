import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import "./common/styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/landing_page/landing_page";
import { VendorOnboarding } from "./components/vendor/vendor_onboarding";
import { useContext } from "react";
import { UserContext } from "./components/login/login_form";

function App() {
  const user = useContext(UserContext);
  return (
    <UserContext.Provider value={user}>
      <Routes>
        {/* Header */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<LandingPage />} />
        <Route path="/vendor-onboarding" element={<VendorOnboarding />} />
        {/* Footer */}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
