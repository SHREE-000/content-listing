import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPage } from '../../features/contentSlice';

const usePage = () => {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.content.page);

    useEffect(() => {
        const handleScroll = () => {
          if (
            window.innerHeight + Math.ceil(document.documentElement.scrollTop) ===
              document.documentElement.offsetHeight ||
            window.innerHeight +
              parseInt(`${document.documentElement.scrollTop}`) ===
              document.documentElement.offsetHeight
          ) {
            dispatch(addPage());
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return page
}

export default usePage;