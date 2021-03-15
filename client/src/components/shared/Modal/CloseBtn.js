import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 36px;
    color: #c0c0c0;
    cursor: pointer;
`

const CloseBtn = ({...props}) => {
    return (
        <Wrapper {...props}>
            &times;
        </Wrapper>
    );
}
 
export default CloseBtn;