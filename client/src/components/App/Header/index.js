import HeaderTitle from "./HeaderTitle";
import HeaderWrapper from "./HeaderWrapper";
import TextInputIcon from "../../shared/input/TextInputIcon";
import { ReactSVG } from "react-svg";
import UserInfo from "./UserInfo/";
import Cart from "./Cart";

const Header = ({title, desc, search, value, handleChange}) => {
    return (
        <HeaderWrapper>
            <HeaderTitle title={title} />
            <TextInputIcon value={value} onChange={handleChange} type='text' placeholder={search} name='search' icon={`./assets/icon/search.svg`} />
            <Cart />
            <UserInfo image='./assets/profile-2.jpg'/>
            <TextInputIcon value={value} onChange={handleChange} type='text' placeholder={search} name='search' icon={`./assets/icon/search.svg`} />
        </HeaderWrapper>
    );
}
 
export default Header;