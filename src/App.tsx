import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home-new";
import { Login } from "./components/login/login";
import "./common/styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/landing_page/landing_page";
import { VendorOnboarding } from "./components/vendor/vendor_onboarding";
import { useContext } from "react";
import { UserContext } from "./components/login/login_form";
import {AdminDashboard} from "./components/admin_dashboard/admin_dashboard";

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
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* Footer */}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
