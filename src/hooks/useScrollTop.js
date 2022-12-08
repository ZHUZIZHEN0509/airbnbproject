import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//滚动到顶部
export default function useScrollTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
}
