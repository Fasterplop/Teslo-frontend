import * as React from "react";

interface IRenderIfProps {
  children?: React.ReactNode;
  isTrue: any;
}

const RenderIf: React.FunctionComponent<IRenderIfProps> = (props) => {
  return <>{props.children}</>;
};

export default RenderIf;
