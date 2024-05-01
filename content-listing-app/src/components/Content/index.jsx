import { memo, useEffect, useState } from "react";
import List from "./List";
import Spinner from "../../shared/components/Spinner";
import useLazyLoad from "../../utils/customHooks/useLazyLoad";
import useAPI from "../../utils/customHooks/usAPI";
import usePage from "../../utils/customHooks/usePage";
import NotFound from "../../shared/components/NotFound";
import { baseURL } from "../../constants/general";
import { useSelector } from "react-redux";

const Content = () => {
  // state for filtered data
  const [filteredData, setFilteredData] = useState([]);

  // customhook used for counting page
  const page = usePage();

  // customhook used for mananging api call includes search
  const { loading, data } = useAPI(
    `${baseURL.DIAGNAL_API}/data/page${page}.json`,
    page
  );

  // customhook used for managing lazy loading
  const [placeholderRef, inView] = useLazyLoad();

  // redux state for search text
  const search = useSelector((state) => state.content.search);

  // filtering data by search text from user
  const filterSearch = () => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    return filtered;
  };

  useEffect(() => {
    const searchData = filterSearch();
    setFilteredData(searchData);
  }, [search, page, data.length]);

  const listProps = {
    search,
    placeholderRef,
    inView,
    filteredData,
  };
  return (
    <>
      {loading ? (
        <div className="mt-10 flex justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {data.length > 0 ? (
            <div className="mt-5 w-full grid grid-cols-3">
              <List listProps={listProps} />
            </div>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </>
  );
};
export default memo(Content);
