import AuthLayout from "@/layouts/AuthLayout";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

interface IAppRouterProps {}

const AppRouter: React.FunctionComponent<IAppRouterProps> = (props) => {
  return (
    <Routes>
      <Route index element={<AuthLayout />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  );
};

export default AppRouter;
