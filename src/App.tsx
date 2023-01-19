import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/NewHome";
import { Login } from "./Components/Login/Login";
import "./Common/Styles/Global.css";
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
