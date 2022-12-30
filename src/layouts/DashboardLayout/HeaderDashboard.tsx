import * as React from "react";
import classNames from "classnames";
import "./_header.css";

interface IHeaderDashboardProps {
  className?: string;
}

const HeaderDashboard: React.FC<IHeaderDashboardProps> = (props) => {
  const { className } = props;

  return (
    <header className={classNames("shadow header", className)}>
      <div className={classNames("header-wrapper h-16")}>
        <div className="header-action header-action-start"></div>
        <div className="header-action header-action-end"></div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
