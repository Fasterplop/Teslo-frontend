import React from "react";
import { HiOutlineMenuAlt2, HiOutlineMenu } from "react-icons/hi";
import classNames from "classnames";

interface INavToggleProps {
  className?: string;
  toggled: boolean;
  onClick(): void;
}
const NavToggle: React.FC<INavToggleProps> = (props) => {
  const { onClick, toggled, className } = props;
  return (
    <span onClick={onClick} className={classNames("text-2xl", className)}>
      {toggled ? <HiOutlineMenu /> : <HiOutlineMenuAlt2 />}
    </span>
  );
};

export default NavToggle;
