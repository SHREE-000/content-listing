const  List = ({ placeholderRef, inView, data = [] }) => {
  return (
    <>
      {data.map((elem, index) => {
        return (
          <div
            key={index}
            className="w-full p-2 sm:p-2 md:p-6 lg:p-8 flex flex-col justify-center"
          >
            {inView ? (
              <img alt="romantic-comedy" />
            ) : (
              <img
                src={`https://test.create.diagnal.com/images/${elem?.["poster-image"]}`}
                alt="romantic-comedy"
                ref={placeholderRef}
              />
            )}
            <p className="mt-1 mb-5 text-center xs:text-xs sm:text-sm md:text-lg lg:text-xl h-2">
              {elem?.name}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default List;
