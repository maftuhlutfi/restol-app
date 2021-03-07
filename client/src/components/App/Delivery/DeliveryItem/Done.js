import { ReactSVG } from "react-svg";
import styled from "styled-components"

const Wrapper = styled.span`
    font-size: 12px;
    color: #5b5b5b;

    & > div {
        display: flex;
    }

    svg {
        margin-right: 10px;
        margin-top: 3px;
    }
`

const Done = ({doneAt}) => {
    return (
        <Wrapper>
                <div>
                    <ReactSVG src='./assets/icon/check.svg' /> 
                    {doneAt}
                </div>
        </Wrapper>
    );
}
 
export default Done;