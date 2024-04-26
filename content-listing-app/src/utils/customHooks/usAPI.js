import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConent, setReqPageNo } from "../../features/contentSlice";

const useAPI = (url, page = 1) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.content.search);
  const reqPageNo = useSelector((state) => state.content.reqPageNo);
  const isBackButton = useSelector((state) => state.content.isBackButton);
  const data = useSelector((state) => state.content.contents);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(1);

  // filtering data by search text from user
  const filterSearch = () => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(setConent(filtered));
  };

  // axios call
  const fetchApi = async () => {
    try {
      const response = await axios.get(url);
      dispatch(setReqPageNo(response?.data?.page?.["page-num-requested"]));
      setTotalPage(
        Math.ceil(
          response?.data?.page?.["total-content-items"] /
            response?.data?.page?.["page-size-requested"]
        )
      );
      if (page === 1 && reqPageNo === 0) {
        dispatch(setConent(response?.data?.page?.["content-items"]?.content));
      } else if (data.length < page * 20) {
        dispatch(
          setConent([
            ...data,
            ...response?.data?.page?.["content-items"]?.content,
          ])
        );
      } else {
        dispatch(setConent(data));
      }
      setLoading(false);
    } catch (error) {
      throw new Error(error?.message);
    }
  };

  // state management using page
  useEffect(() => {
    if (page === 1 && data.length > 20) {
      const tempData = [...data];
      dispatch(setConent(tempData.splice(0, 20)));
      dispatch(setReqPageNo(0));
    } else if (page > reqPageNo && page <= totalPage) fetchApi();
  }, [page]);

  // state management when backbutton press
  useEffect(() => {
    fetchApi();
  }, [isBackButton]);

  // state management using search
  useEffect(() => {
    filterSearch();
  }, [search, page, data.length]);

  return { loading, data };
};

export default useAPI;
