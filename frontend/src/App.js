import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Page404 from "./pages/404";
import MainContent from "./comopnents/dashboard/MainContent";
import DailyEqub from "./comopnents/dashboard/equb/DailyEqub";
import WeeklyEqub from "./comopnents/dashboard/equb/WeeklyEqub";
import CustomEqub from "./comopnents/dashboard/equb/CustomEqub";
import MonthlyEqub from "./comopnents/dashboard/equb/Monthly";
import Equb from "./pages/Equb";
import LandingPage from "./pages/LandingPage";
import Main from "./comopnents/landingPage/Main";
import EqubJoined from "./comopnents/dashboard/equb/equbDetail/EqubJoined";
import Payment from "./comopnents/dashboard/equb/equbDetail/Payment";
import Lottery from "./comopnents/dashboard/equb/equbDetail/Lottery";
import EqubMembers from "./comopnents/dashboard/equb/equbDetail/EqubMembers";
import EqubDetail from "./comopnents/dashboard/equb/equbDetail/EqubDetails";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<LandingPage />}>
          <Route index element={<Main />} />
          <Route path="/equb" element={<Equb />} />
        </Route>
        <Route exact={true} path="/signUp" element={<Register />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route
          exact={true}
          path="/forgotPassword"
          element={<ForgotPassword />}
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainContent />} />
          <Route path="/dashboard/equbdetail" element={<EqubDetail />}>
            <Route index element={<EqubDetail />} />
            <Route
              path="/dashboard/equbdetail/equbjoined"
              element={<EqubJoined />}
            />
            <Route path="/dashboard/equbdetail/payment" element={<Payment />} />

            <Route
              path="/dashboard/equbdetail/equbmembers"
              element={<EqubMembers />}
            />
            <Route path="/dashboard/equbdetail/lottery" element={<Lottery />} />
          </Route>
          <Route path="/dashboard/dailyEqub" element={<DailyEqub />} />
          <Route path="/dashboard/weeklyEqub" element={<WeeklyEqub />} />
          <Route path="/dashboard/monthlyEqub" element={<MonthlyEqub />} />
          <Route path="/dashboard/customEqub" element={<CustomEqub />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
