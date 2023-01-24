import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import { Vendor } from "./components/vendor/vendor";
import "./common/styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      {/* Header */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vendor" element= {<Vendor />}/>
      {/* Footer */}
    </Routes>
  );
}

export default App;
