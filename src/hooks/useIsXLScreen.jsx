
import { useState, useEffect } from "react";

const useIsXLScreen = () => {
  const [isXL, setIsXL] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => setIsXL(window.innerWidth >= 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isXL;
};

export default useIsXLScreen;