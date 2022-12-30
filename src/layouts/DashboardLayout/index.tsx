import * as React from "react";
import HeaderDashboard from "./HeaderDashboard";

interface IDashboardLayoutProps {}

const DashboardLayout: React.FC<IDashboardLayoutProps> = (props) => {
  const {} = props;
  return (
    <div className="app-layout-classic flex flex-auto flex-col">
      <div className="flex flex-auto min-w-0">
        <SideNav />
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          <Header
            className="shadow dark:shadow-2xl"
            headerStart={<HeaderActionsStart />}
            headerEnd={<HeaderActionsEnd />}
          />
          <div className="h-full flex flex-auto flex-col">
            <View {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
