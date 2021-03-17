import styled from "styled-components"
import scaleUp from "../../styled-css/keyframes/scale-up"

const ModalBody = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.01);
    position: relative;
    animation: ${scaleUp} 0.3s ease-out;

    ${props => props.width && `width: ${props.width};`}
`

export default ModalBody