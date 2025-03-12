import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import ForgetPass from "./pages/AuthPages/ForgetPass";
import VerifyOTP from "./pages/AuthPages/VerifyOTP";
import ResetPass from "./pages/AuthPages/ResetPass";
import Dashbaord from "./components/Dashbaord/Dashbaord";
import DashHome from "./pages/Dashboard/DashHome";
import PrivateRoute from "./components/auth/PrivateRoute";
import Jobs from "./pages/Jobs/Jobs";
import CreateJobs from "./pages/Jobs/CreateJobs";
import ViewJob from "./pages/Jobs/ViewJob";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/signin" element={<SignIn /> } />
        <Route path="/signup" element={<SignUp /> } />
        <Route path="/forgetpass" element={<ForgetPass /> } />
        <Route path="/verifyotp" element={<VerifyOTP />} />
        <Route path="/passreset" element={<ResetPass /> } />

        <Route path="/Dashboard/" element={<PrivateRoute element={<Dashbaord /> }/> } >
          <Route path="Home" element={<DashHome /> } /> 
          <Route path="Jobs" element={<Jobs /> } />
          <Route path="CreateJob" element={<CreateJobs /> } />
          <Route path="ViewJob/:id" element={<ViewJob /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}