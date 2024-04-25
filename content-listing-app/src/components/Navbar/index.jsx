import { ALT_IMG, baseURL, HEADING } from "../../constants/url";
import {
  generalFlexStyle,
  generalStyle,
} from "../../shared/styles/basicUIStyles";
import ButtonWithIMG from "../../shared/components/ButtonWithIMG";
import { useSelector, useDispatch } from 'react-redux'
import { backOperation, setPage } from '../../features/contentSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(setPage(1));
  };
  return (
    <div className="mt-5 mb-5" style={{...generalFlexStyle, justifyContent: "space-around"}}>
      <div style={generalFlexStyle}>
        <ButtonWithIMG
          handlerClick={handlerClick}
          style={generalStyle}
          src={`${baseURL.DIAGNAL_API}/images/Back.png`}
          alt={ALT_IMG.LEFT_CHEVRON}
        />
        <h4 className="ml-5">{HEADING.TITLE}</h4>
      </div>
      <div className="flex mt-2">
        <input type="text" className="text-black h-5 mr-1 rounded-md"/>
        <button type="button" className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-gray-700" onclick="clearInput()">
    &times;
  </button>

        <div>
        <ButtonWithIMG
        style={generalStyle}
        src={`${baseURL.DIAGNAL_API}/images/search.png`}
        alt={ALT_IMG.SEARCH}
      />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
