import Dashboard from "./pages/dashboard/Dashboard";
import SignUp from "./pages/auth/signup/SignUp";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import { ResetPassword } from "./pages/auth/reset-password/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
