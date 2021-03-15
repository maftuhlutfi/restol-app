import styled from "styled-components"

const Wrapper = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.6);
    width: 100vw;
    height: 100vh;
    display: ${props => props.show ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
`

const Modal = ({show, children}) => {
    return (
        <Wrapper show={show}>
            {children}
        </Wrapper>
    );
}
 
export default Modal;