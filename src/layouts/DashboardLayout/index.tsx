import * as React from "react";
import HeaderDashboard from "./HeaderDashboard";
import Home from "../views/home";
import SidebarDashboard from "./SidebarDashboard";

interface IDashboardLayoutProps {}

const DashboardLayout: React.FC<IDashboardLayoutProps> = (props) => {
  const {} = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggledSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="app-layout-classic flex flex-auto flex-col">
      <div className="flex flex-auto min-w-0">
        <SidebarDashboard setIsOpen={setIsOpen} isOpen={isOpen} />
        <div className=" flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          <HeaderDashboard isOpen={isOpen} toggleSidebar={toggledSidebar} />
          {/* <Header
            className="shadow dark:shadow-2xl"
            headerStart={<HeaderActionsStart />}
            headerEnd={<HeaderActionsEnd />}
          /> */}
          <div className="h-full flex flex-auto flex-col">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
