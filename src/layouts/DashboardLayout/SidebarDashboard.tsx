import * as React from "react";

import Drawer from "@/components/ui/Drawer";
import classNames from "classnames";
import useResponsive from "@/utils/hooks/useResponsive";
import RenderIf from "@/components/ui/RenderIf";
import "./_side-nav.css";
import NavToggle from "./NavToggle";
import VerticalMenuContent from "./VerticalMenuContent";

interface ISidebarDashboardProps {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
}

const SidebarDashboard: React.FC<ISidebarDashboardProps> = (props) => {
  const { isOpen, setIsOpen } = props;

  const openDrawer = () => setIsOpen(true);

  const onDrawerClose = () => setIsOpen(false);

  const responsive = useResponsive();

  return (
    <RenderIf isTrue={responsive === "sm"}>
      <div className="text-2xl" onClick={openDrawer}>
        <NavToggle onClick={() => setIsOpen(!isOpen)} toggled={isOpen} />
      </div>
      <Drawer
        title="Navigation"
        isOpen={isOpen}
        onClose={onDrawerClose}
        bodyClass={classNames("side-nav-light", "p-0")}
        width={330}
        placement={"left"}
      >
        <React.Suspense fallback={<></>}>
          {isOpen && <VerticalMenuContent />}
        </React.Suspense>
      </Drawer>
    </RenderIf>
  );
};

export default SidebarDashboard;
