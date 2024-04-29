import { memo, useState } from "react";
import { ALT_IMG, baseURL, HEADING } from "../../constants/general";
import {
  generalFlexStyle,
  generalStyle,
} from "../../shared/styles/basicUIStyles";
import ButtonWithIMG from "../../shared/components/ButtonWithIMG";
import { useDispatch, useSelector } from "react-redux";
import { setBackOperation, setSearch } from "../../features/contentSlice";
import InputWithClear from "../../shared/components/InputWithClear";

const Navbar = () => {
  const dispatch = useDispatch();
  const contents = useSelector(state => state.content.contents);
  const [searchValue, setSearchValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handlePage = () => {
    dispatch(setBackOperation());
    setSearchValue("");
    setFilteredSuggestions([]);
  };
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
    const filteredSuggestions = contents.filter((suggestion) =>
    suggestion.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  setFilteredSuggestions(filteredSuggestions);
  };
  const handleClear = () => {
    setSearchValue("");
    dispatch(setSearch(""));
    setFilteredSuggestions([]);
  };
  const handleSearch = () => {
    dispatch(setSearch(searchValue));
    setFilteredSuggestions([]);
    if (!searchValue.trim()) dispatch(setBackOperation());
  };

  const handleSuggestionClick = (value) => {
    setSearchValue(value);
    dispatch(setSearch(value));
    setFilteredSuggestions([]);
    if (!value.trim()) dispatch(setBackOperation());
  };
  return (
    <div
      className="mt-5 mb-5 flex flex-col xs:flex-row xs:align-middle"
      style={{ ...generalFlexStyle, justifyContent: "space-around" }}
    >
      <div style={generalFlexStyle}>
        <ButtonWithIMG
          handlerClick={handlePage}
          style={generalStyle}
          src={`${baseURL.DIAGNAL_API}/images/Back.png`}
          alt={ALT_IMG.LEFT_CHEVRON}
        />
        <h4 className="ml-5">{HEADING.TITLE}</h4>
      </div>
      <div className="flex mt-2">
        <InputWithClear
          filteredSuggestions={filteredSuggestions}
          handleChange={handleChange}
          handleClear={handleClear}
          value={searchValue}
          handleSuggestionClick={handleSuggestionClick}
        />
        <div>
          <ButtonWithIMG
            handlerClick={handleSearch}
            style={generalStyle}
            src={`${baseURL.DIAGNAL_API}/images/search.png`}
            alt={ALT_IMG.SEARCH}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
