const InputWithClear = ({ handleChange, handleClear, value, filteredSuggestions, handleSuggestionClick }) => {
  return (
    <>
    <input
        value={value}
        onChange={handleChange}
        type="text"
        className="pl-1 pr-1 text-black h-5 rounded-l-lg border-0 focus:outline-none"
      />
      <button
        onClick={handleClear}
        className="bg-white text-black h-5 rounded-r-lg pr-1 mr-1"
      >
        &times;
      </button>
      {filteredSuggestions.length > 0 && ( 
        <ul className="absolute z-10 left-0 mt-8 w-full bg-black border border-gray-300 rounded shadow">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion.name)}
              className="text-center cursor-pointer px-3 py-2 bg-gray-800 hover:bg-black"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default InputWithClear;
