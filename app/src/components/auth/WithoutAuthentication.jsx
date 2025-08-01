import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuthentication } from "@/provider/AuthProvider";

function WithoutAuthentication() {
  const { token, loading } = useAuthentication();
  if (loading) return null;
  return <> {!token ? <Outlet /> : <Navigate to={"/"} />} </>;
}

export default WithoutAuthentication;
