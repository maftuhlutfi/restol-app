import styled from "styled-components"

const ButtonGroup = styled.span`
    display: flex;

    & > button {
        min-width: 100px;
    }
    
    & > button:first-child {
        margin-right: 20px;
    }
`

export default ButtonGroup