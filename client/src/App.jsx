import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import ForgetPass from "./pages/AuthPages/ForgetPass";
import VerifyOTP from "./pages/AuthPages/VerifyOTP";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/signin" element={<SignIn /> } />
        <Route path="/signup" element={<SignUp /> } />
        <Route path="/forgetpass" element={<ForgetPass /> } />
        <Route path="/verifyotp" element={<VerifyOTP />} />
      </Routes>
    </BrowserRouter>
  )
}