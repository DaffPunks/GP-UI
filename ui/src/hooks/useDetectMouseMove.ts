import { useEffect, useState } from "react";

const useDetectMouseMove = (timing: number) => {
  const [state, setState] = useState(false);
  let timeout: any;

  const mouseMove = (e: Event) => {
    e.preventDefault();
    setState(true);

    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setState(false), timing);
    })();
  };

  // @ts-ignore
  document.addEventListener("mousemove", mouseMove, false);

  useEffect(() => {
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return state;
};

export default useDetectMouseMove;
