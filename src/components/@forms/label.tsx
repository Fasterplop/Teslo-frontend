import * as React from "react";

interface ILabelProps {
  children?: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

const Label: React.FunctionComponent<ILabelProps> = (props) => {
  const { htmlFor, children, className } = props;
  if (!children) return null;
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
