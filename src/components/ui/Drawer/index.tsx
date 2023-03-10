import React from "react";
import classNames from "classnames";
import Modal from "react-modal";
import CloseButton from "../CloseButton";
import { motion } from "framer-motion";
import "./_drawer.css";

export type PlacementDrawer = "top" | "right" | "bottom" | "left";

interface IDrawerProps {
  placement?: PlacementDrawer;
  children?: React.ReactNode;
  closable?: boolean;
  isOpen: boolean;
  onClose(): void;
  width?: number | string;
  height?: number | string;
  closeTimeoutMS?: number;
  showBackdrop?: boolean;
  lockScroll?: boolean;
  className?: string;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  bodyOpenClassName?: string;
  portalClassName?: string;
  overlayClassName?: string;
  headerClass?: string;
  footerClass?: string;
  bodyClass?: string;
}

const Drawer: React.FunctionComponent<IDrawerProps> = (props) => {
  const {
    children,
    className,
    closable,
    width,
    height,
    isOpen,
    onClose,
    closeTimeoutMS,
    placement,
    bodyOpenClassName,
    portalClassName,
    overlayClassName,
    title,
    footer,
    headerClass,
    footerClass,
    bodyClass,
    showBackdrop,
    lockScroll,
  } = props;

  const onCloseClick = () => onClose();

  const renderCloseButton = <CloseButton onClick={onCloseClick} />;

  const getStyle = () => {
    if (placement === "left" || placement === "right") {
      return {
        dimensionClass: "vertical",
        contentStyle: { width },
        motionStyle: {
          [placement]: `-${width}${typeof width === "number" && "px"}`,
        },
      };
    }

    if (placement === "top" || placement === "bottom") {
      return {
        dimensionClass: "horizontal",
        contentStyle: { height },
        motionStyle: {
          [placement]: `-${height}${typeof height === "number" && "px"}`,
        },
      };
    }
  };

  const { dimensionClass, contentStyle, motionStyle } = getStyle();

  return (
    <Modal
      className={{
        base: classNames("drawer", className),
        afterOpen: "drawer-after-open",
        beforeClose: "drawer-before-close",
      }}
      overlayClassName={{
        base: classNames(
          "drawer-overlay",
          overlayClassName,
          !showBackdrop && "bg-transparent"
        ),
        afterOpen: "drawer-overlay-after-open",
        beforeClose: "drawer-overlay-before-close",
      }}
      portalClassName={classNames("drawer-portal", portalClassName)}
      bodyOpenClassName={classNames(
        "drawer-open",
        lockScroll && "drawer-lock-scroll",
        bodyOpenClassName
      )}
      ariaHideApp={false}
      isOpen={isOpen}
      closeTimeoutMS={closeTimeoutMS}
    >
      <motion.div
        className={classNames("drawer-content", dimensionClass)}
        style={contentStyle}
        initial={motionStyle}
        animate={{
          [placement]: isOpen ? 0 : motionStyle[placement],
        }}
      >
        {title || closable ? (
          <div className={classNames("drawer-header", headerClass)}>
            {typeof title === "string" ? (
              <h4>{title}</h4>
            ) : (
              <span>{title}</span>
            )}
            {closable && renderCloseButton}
          </div>
        ) : null}
        <div className={classNames("drawer-body", bodyClass)}>{children}</div>
        {footer && (
          <div className={classNames("drawer-footer", footerClass)}>
            {footer}
          </div>
        )}
      </motion.div>
    </Modal>
  );
};

Drawer.defaultProps = {
  closable: true,
  width: 400,
  height: 400,
  closeTimeoutMS: 300,
  placement: "right",
  showBackdrop: true,
  lockScroll: true,
};

export default Drawer;
