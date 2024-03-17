import { useEffect, useState } from "react";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      const { innerWidth, innerHeight } = window;

      const isMobile = innerWidth < 375;
      const isTablet = innerWidth >= 375 && innerWidth < 768;
      const isDesktop = innerWidth >= 768;

      setWindowSize({
        width: innerWidth,
        height: innerHeight,
        isMobile,
        isTablet,
        isDesktop,
      });
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
