import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuthentication } from "@/provider/AuthProvider";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { menuItems } from "@/data";

function WithAuthentication() {
  const { token, loading } = useAuthentication();
  const location = useLocation();

  const currentTitle =
    menuItems.find((item) => item.href === location.pathname)?.label || "";
  if (loading) return null;
  return (
    <>
      {" "}
      {token ? (
        <>
          <div className="flex ">
            <Sidebar />
            <div className="bg-[#F3F3F7] min-h-screen w-full">
              <Header title={currentTitle} />
              <div className="my-4 px-4">
                <Outlet />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}{" "}
    </>
  );
}

export default WithAuthentication;
