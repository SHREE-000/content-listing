import { ALT_IMG, baseURL, HEADING } from "../../constants/url";
import {
  generalFlexStyle,
  generalStyle,
} from "../../shared/styles/basicUIStyles";
import ButtonWithIMG from "../../shared/components/ButtonWithIMG";
const Navbar = () => {
  return (
    <div className="mt-5 mb-5" style={{...generalFlexStyle, justifyContent: "space-around"}}>
      <div style={generalFlexStyle}>
        <ButtonWithIMG
          style={generalStyle}
          src={`${baseURL.DIAGNAL_API}/images/Back.png`}
          alt={ALT_IMG.LEFT_CHEVRON}
        />
        <h4 className="ml-5">{HEADING.TITLE}</h4>
      </div>
      <ButtonWithIMG
        style={generalStyle}
        src={`${baseURL.DIAGNAL_API}/images/search.png`}
        alt={ALT_IMG.SEARCH}
      />
    </div>
  );
};

export default Navbar;
