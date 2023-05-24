import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Page404 from "./pages/404";

function App() {
  return (

    <div>
      <Routes>
        <Route exact={true} path="/" element={<LandingPage />} />
        <Route exact={true} path="/signUp" element={<Register />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route
          exact={true}
          path="/forgotPassword"
          element={<ForgotPassword />}
        />
        <Route exact={true} path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Page404 />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
