import { ReactSVG } from "react-svg"
import styled from "styled-components"

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;

    & > span:not(:last-child) {
        margin-right: 10px;
    }
`

const IconBtn = styled.span`
    background-color: white;
    padding: 8px;
    border-radius: 5px;
    height: 30px;
    width: 30px;
    box-shadow: 0px 0px 7.42857px rgba(0, 0, 0, 0.13);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 20px;
        margin-top: 5px;
    }
`

const ViewCompleteBtn = () => {
    return (
        <ButtonGroup>
            <IconBtn>
                <ReactSVG src='./assets/icon/view.svg' />
            </IconBtn>
            <IconBtn>
                <ReactSVG src='./assets/icon/check1.svg' />
            </IconBtn>
        </ButtonGroup>
    );
}
 
export default ViewCompleteBtn;