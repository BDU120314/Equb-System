import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<Dashboard />} />
        <Route exact={true} path="/signUp" element={<Register />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
