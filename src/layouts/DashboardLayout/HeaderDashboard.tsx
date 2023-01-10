import * as React from "react";
import classNames from "classnames";
import "./_header.css";
import "@/styles/avatar.styles.css";
import {
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineMenuAlt2,
} from "react-icons/hi";

import Dropdown from "@/components/ui/Dropdown";
import DropdownItem from "@/components/ui/Dropdown/DropdownItem";
import NavToggle from "./NavToggle";

interface IHeaderDashboardProps {
  className?: string;
  toggleSidebar(): void;
  isOpen: boolean;
}

const HeaderDashboard: React.FC<IHeaderDashboardProps> = (props) => {
  const { className, toggleSidebar, isOpen } = props;

  return (
    <header className={classNames("shadow header", className)}>
      <div className={classNames("header-wrapper h-16")}>
        <div className="header-action header-action-start">
          <NavToggle onClick={toggleSidebar} toggled={isOpen} />
        </div>

        <Dropdown
          displayButton={
            <div className="header-action header-action-end">
              <div className=" avatar avatar-squared avatar-bordered border-2 avatar-group place-content-center">
                <HiOutlineUser className=" text-xl h-auto " />
              </div>
              <div className="ml-2 text-sm md:block hidden pr-4">
                <div className=""> Admin </div>
                <div className=" font-bold"> User01 </div>
              </div>
            </div>
          }
        >
          <DropdownItem>
            <div className="flex flex-row">
              <div className=" avatar avatar-squared avatar-bordered border-2 avatar-group place-content-center">
                <HiOutlineUser className=" text-xl h-auto " />
              </div>
              <div className="ml-2 text-sm md:block hidden pr-4">
                <div className="font-bold"> User01 </div>
                <div className=""> User01@gmail.com </div>
              </div>
            </div>
          </DropdownItem>

          <div className="border-[1px] mx-2"></div>

          <DropdownItem>
            <div className="flex flex-row items-center">
              <div className="">
                <HiOutlineLogout className=" text-xl h-auto " />
              </div>
              <div className=" ml-2 text-sm md:block hidden pr-4">
                <div className="font-bold"> Sign Out </div>
              </div>
            </div>
          </DropdownItem>
        </Dropdown>
      </div>
    </header>
  );
};

export default HeaderDashboard;
