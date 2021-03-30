import { useState } from "react"
import { ReactSVG } from "react-svg"
import ListItem from "./ListItem";
import ListContainer from "./ListContainer";
import Wrapper from "./Wrapper";

const Dropdown = ({text, list, active, handleChange}) => {
    const [collapse, setCollapse] = useState(true)

    const handleCollapse = () => {
        setCollapse(prev => !prev)
    }

    return (
        <Wrapper onClick={handleCollapse} collapse={collapse}>
            <span>{text} <b>{active}</b></span>
            <ReactSVG src='./assets/icon/drop.svg' />
            {!collapse && <ListContainer>
                {list.map((li, index) => <ListItem active={active === li} key={index} onClick={() => handleChange(li)}>{li}</ListItem>)}
            </ListContainer>}
        </Wrapper>
    );
}
 
export default Dropdown;