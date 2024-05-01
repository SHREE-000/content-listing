import { memo } from "react";
import { ALT_IMG, baseURL } from "../../constants/general";
import { highlightName } from "../../utils/methods/general";

const List = ({ listProps }) => {
  const { search, placeholderRef, inView, filteredData = [] } = listProps;
  const handleImageError = (event) => {
    event.target.src = baseURL.ERRO_IMG;
    event.target.alt = `${ALT_IMG.CONTENT}-error`;
  };

  return (
    <>
      {filteredData.map((elem, index) => {
        return (
          <div
            key={index}
            className="w-full p-2 sm:p-2 md:p-6 lg:p-8 flex flex-col justify-center"
          >
            {inView ? (
              <img alt={ALT_IMG.CONTENT} onError={handleImageError} />
            ) : (
              <img
                src={`https://test.create.diagnal.com/images/${elem?.["poster-image"]}`}
                ref={placeholderRef}
                onError={handleImageError}
                alt={ALT_IMG.CONTENT}
              />
            )}
            <p className="mt-5 mb-12 text-center text-wrap text-xs xs:text-lg h-2">
              {highlightName(elem?.name, search)}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default memo(List);
