import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../../features/contentSlice";

const usePage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.content.page);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > prevScrollY) {
        // scrolling down
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (windowHeight + scrollTop >= documentHeight) {
          dispatch(addPage());
        }
      }
      setPrevScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, prevScrollY]);

  return page;
};

export default usePage;
