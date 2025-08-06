import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import SignUp from "./pages/auth/signup/SignUp";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword";
import Login from "./pages/auth/login/Login";
import { ResetPassword } from "./pages/auth/reset-password/ResetPassword";
import SuccessfullyRegistration from "./pages/auth/email-verify/SuccessfullyRegistration";
import WithoutAuthentication from "./components/auth/WithoutAuthentication";
import WithAuthentication from "./components/auth/WithAuthentication";
import NotFound from "./pages/not-found/NotFound";
import Transitions from "./pages/transitions/Transitions";
import Support from "./pages/support/Support";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route element={<WithoutAuthentication />}>
          <Route path="/#/login" element={<Login />} />
          <Route path="/#/sign-up" element={<SignUp />} />
          <Route path="/#/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/#/forgot-password-verify/:token"
            element={<ResetPassword />}
          />
          <Route
            path="/#/email-verify/:token"
            element={<SuccessfullyRegistration />}
          />
        </Route>

        {/* Protected route */}
        <Route element={<WithAuthentication />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/#/transitions" element={<Transitions />} />
          <Route path="/#/support" element={<Support />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
