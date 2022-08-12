import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "../auth/pages/LoginPage";
import {DashboardRoutes} from "../heroes/routes/DashboardRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/*" element={<DashboardRoutes/>}/>
      </Routes>
    </>
  );
};