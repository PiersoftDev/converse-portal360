import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import "./common/styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      {/* Header */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* Footer */}
    </Routes>
  );
}

export default App;
