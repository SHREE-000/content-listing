import { memo } from "react";
import List from "./List";
import Spinner from "../../shared/components/Spinner";
import useLazyLoad from "../../utils/customHooks/useLazyLoad";
import useAPI from "../../utils/customHooks/usAPI";
import usePage from "../../utils/customHooks/usePage";
import NotFound from "../../shared/components/NotFound";
import { baseURL } from "../../constants/general";
import { useSelector } from "react-redux";

const Content = () => {
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
  const search = useSelector(state => state.content.search);

  const listProps = {
    search,
    placeholderRef,
    inView,
    data
  }
  return (
    <>
      {loading ? (
        <div className="mt-10 flex justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {data.length > 0 ? 
        <div className="mt-5 w-full grid grid-cols-3">
          <List listProps={listProps}/>
        </div>
          : <NotFound/>}
        </>
      )}
    </>
  );
};
export default memo(Content);
