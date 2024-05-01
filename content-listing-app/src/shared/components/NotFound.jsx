import { CONTENT, HEADING } from "../../constants/general";
import { setBackOperation } from "../../features/contentSlice";
import { useDispatch } from "react-redux";

const NotFound = () => {
  const dispatch = useDispatch();
  const screenHeight = window.innerHeight;
  const remainingHeight = screenHeight - 100;
  return (
    <div role="alert" style={{ minHeight: `${remainingHeight}px` }} className="bg-black flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          {HEADING.NO_RESULT}
        </h1>
        <p className="text-gray-600">{CONTENT.NO_RESULT}</p>
        <button
          onClick={() => dispatch(setBackOperation())}
          className="mt-4 bg-black text-white font-bold py-2 px-4 rounded"
        >
          {HEADING.BACK}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
