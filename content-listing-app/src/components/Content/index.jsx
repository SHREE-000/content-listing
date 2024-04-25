import React from "react";
import List from "./List";
import Spinner from "../../shared/components/Spinner";
import useLazyLoad from "../../utils/customHooks/useLazyLoad";
import useAPI from "../../utils/customHooks/usAPI";
import usePage from "../../utils/customHooks/usePage";
import { useSelector } from "react-redux";

const Content = () => {
  const page = usePage();
  const { loading, data } = useAPI(
    `https://test.create.diagnal.com/data/page${page}.json`,
    page
  );
  console.log(data,'datat datata datata');
  const [placeholderRef, inView] = useLazyLoad();
  return (
    <>
      {loading ? (
        <div className="mt-10 flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="mt-5 w-full grid grid-cols-3">
          <List placeholderRef={placeholderRef} inView={inView} data={data} />
        </div>
      )}
      {page > 1 && loading && (
        <div className="mt-10 flex justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
};
export default Content;
