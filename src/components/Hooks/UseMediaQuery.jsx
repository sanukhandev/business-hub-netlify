import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is available
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      const documentChangeHandler = () => setMatches(mediaQueryList.matches);

      setMatches(mediaQueryList.matches); // Initial check

      mediaQueryList.addEventListener("change", documentChangeHandler);

      return () => {
        mediaQueryList.removeEventListener("change", documentChangeHandler);
      };
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
