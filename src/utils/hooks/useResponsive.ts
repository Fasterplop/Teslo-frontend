import { useEffect, useState } from "react";
import { theme } from "twin.macro";

const twBreakpoint = theme`screens`;

const breakpointInt = (str = "") => {
  return parseInt(str.replace("px", ""));
};

const breakpoint = {
  "2xl": breakpointInt(twBreakpoint["2xl"]), // 1536
  xl: breakpointInt(twBreakpoint.xl), // 1280
  lg: breakpointInt(twBreakpoint.lg), // 1024
  md: breakpointInt(twBreakpoint.md), // 768
  sm: breakpointInt(twBreakpoint.sm), // 640
  xs: breakpointInt(twBreakpoint.xs), // 576
};

const useResponsive = () => {
  const getAllSizes = (comparator = "smaller") => {
    const currentWindowWidth = window.innerWidth;
    return Object.fromEntries(
      Object.entries(breakpoint).map(([key, value]) => [
        key,
        comparator === "larger"
          ? currentWindowWidth > value
          : currentWindowWidth < value,
      ])
    );
  };

  const getResponsiveState = () => {
    const currentWindowWidth = window.innerWidth;
    return {
      windowWidth: currentWindowWidth,
      larger: getAllSizes("larger"),
      smaller: getAllSizes("smaller"),
    };
  };

  const [responsive, setResponsive] = useState(getResponsiveState());

  const resizeHandler = () => {
    const responsiveState = getResponsiveState();
    setResponsive(responsiveState);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsive.windowWidth]);

  return responsive;
};

export default useResponsive;

// import * as React from 'react';
// import { breakpoints } from '@/utils';
// interface WindowSize {
//     width: number;
//     height: number;
// }

// export type Breakpoint = keyof typeof breakpoints;

// const useBreakpoint = () => {
//     const [breakpoint, setBreakPoint] = React.useState<Breakpoint>();
//     const [windowSize, setWindowSize] = React.useState<WindowSize>({
//         width: undefined,
//         height: undefined,
//     });

//     const handleResize = React.useCallback(() => {
//         setWindowSize({
//             width: window.innerWidth,
//             height: window.innerHeight,
//         });
//     }, []);

//     React.useEffect(() => {
//         window.addEventListener('resize', handleResize);
//         handleResize();

//         if (breakpoints.mobile < windowSize.width && windowSize.width < breakpoints.sm) {
//             setBreakPoint('mobile');
//         }
//         if (breakpoints.sm < windowSize.width && windowSize.width < breakpoints.md) {
//             setBreakPoint('md');
//         }
//         if (breakpoints.md < windowSize.width && windowSize.width < breakpoints.lg) {
//             setBreakPoint('lg');
//         }
//         if (breakpoints.lg < windowSize.width && windowSize.width < breakpoints.xl) {
//             setBreakPoint('xl');
//         }
//         if (breakpoints.xl < windowSize.width && windowSize.width < breakpoints['2xl']) {
//             setBreakPoint('2xl');
//         }

//         if (windowSize.width >= breakpoints['2xl']) {
//             setBreakPoint('2xl');
//         }

//         return () => window.removeEventListener('resize', handleResize);
//     }, [windowSize.width, handleResize]);
//     return breakpoint;
// };

// export default useBreakpoint;
