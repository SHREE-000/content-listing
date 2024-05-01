import { highlightName } from "../../utils/methods/general";

const InputWithClear = ({
  handleChange,
  handleClear,
  value,
  filteredSuggestions,
  handleSuggestionClick,
  handleKeyPress,
}) => {
  return (
    <>
      <input
        onKeyDown={handleKeyPress}
        value={value}
        onChange={handleChange}
        type="text"
        className="pl-1 pr-1 text-black h-5 rounded-l-lg border-0 focus:outline-none"
      />
      <button
        type="button"
        onClick={handleClear}
        className="bg-white text-black h-5 rounded-r-lg pr-2 mr-2 relative"
      >
        <span className="absolute bottom-0 right-2">&times;</span>
      </button>
      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 left-0 mt-8 w-full bg-black border border-gray-300 rounded shadow">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion.name)}
              className="text-center cursor-pointer px-3 py-2 bg-gray-800 hover:bg-black"
            >
              {highlightName(suggestion?.name, value)}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default InputWithClear;
