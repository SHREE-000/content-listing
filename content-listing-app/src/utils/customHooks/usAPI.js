import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { backOperation, setPage } from "../../features/contentSlice";

const useAPI = (url, page = 1) => {
  console.log(page, 'page page pgaer');
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reqPageNo, setReqPageNo] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  // if(isBackButtonPresif(data.length > 20) {
  //   console.log("Entereddddddddddddddddddddddddddddddddddddd");
  //   data.splice(20);
  //   dispatch(setPage(1));
  //   setTotalPage(1);
  //   setReqPageNo(0);
  //   dispatch(backOperation());
  // }
  const fetchApi = async () => {
    const response = await axios.get(url);
    setReqPageNo(response?.data?.page?.["page-num-requested"]);
    setTotalPage(Math.ceil(response?.data?.page?.["total-content-items"]/response?.data?.page?.["page-size-requested"]));
    setData((prevData) => {
      if(prevData.length < page * 20) return [...prevData, ...response?.data?.page?.["content-items"]?.content];
      else return [...prevData];
    });
    setLoading(false);
  };
  useEffect(() => {
    if(page === 1 && data.length > 20) {
      setData((data) => data.splice(0,20));
      setReqPageNo(0);
    }
    else if(page > reqPageNo && page <= totalPage)fetchApi();
  }, [page]);

  return { loading, data };
};

export default useAPI;