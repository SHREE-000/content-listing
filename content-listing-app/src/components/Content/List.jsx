import { memo } from "react";
import { ALT_IMG, baseURL } from "../../constants/general";

const List = ({listProps}) => {
  const { search, placeholderRef, inView, data = [] } = listProps;
  const handleImageError = (event) => {
    event.target.src = baseURL.ERRO_IMG;
    event.target.alt = `${ALT_IMG.CONTENT}-error`;
  };
  const highlightName = (name) => {
    const words = name.split(new RegExp(`(${search})`, 'gi'));
    return words.map((word, idx) => (
      word.toLowerCase() === search.toLowerCase() ? (
        <span key={idx} className="text-yellow-300">{word}</span>
      ) : (
        <span key={idx}>{word}</span>
      )
    ))
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
              {
                highlightName(elem?.name)
              }
            </p>
          </div>
        );
      })}
    </>
  );
};

export default memo(List);
