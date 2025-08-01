import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuthentication } from "@/provider/AuthProvider";

function WithAuthentication() {
  const { token, loading } = useAuthentication();
  if (loading) return null;
  return <> {token ? <Outlet /> : <Navigate to={"/login"} />} </>;
}

export default WithAuthentication;
