import * as React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

import LoginPage from "@/app/login";

interface IAppRouterProps {}

const AppRouter: React.FunctionComponent<IAppRouterProps> = (props) => {
  const {} = props;
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  );
};

export default AppRouter;
