import { ReactSVG } from "react-svg";
import styled from "styled-components"

const Wrapper = styled.span`
    font-size: 12px;
    color: #b5b5b5;

    & > div {
        display: flex;
    }

    svg {
        margin-right: 10px;
        margin-top: 3px;
    }
`

const Done = ({doneAt, paymentType}) => {
    return (
        <Wrapper>
            <div>
                <ReactSVG src='./assets/icon/check.svg' /> 
                Done at {doneAt} ({paymentType})
            </div> 
        </Wrapper>
    );
}
 
export default Done;