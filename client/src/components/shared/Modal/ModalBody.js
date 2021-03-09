import styled from "styled-components"

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

    ${props => props.width && `width: ${props.width};`}
`

export default ModalBody