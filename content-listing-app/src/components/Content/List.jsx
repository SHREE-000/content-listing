import { memo } from "react";
import { ALT_IMG, baseURL } from "../../constants/general";

const List = ({ placeholderRef, inView, data = [] }) => {
  const handleImageError = (event) => {
    event.target.src = baseURL.ERRO_IMG;
    event.target.alt = `${ALT_IMG.CONTENT}-error`;
  };
  return (
    <>
      {data.map((elem, index) => {
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
              {elem?.name}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default memo(List);
