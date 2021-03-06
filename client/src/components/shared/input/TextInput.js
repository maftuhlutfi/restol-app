import styled from "styled-components";

const TextInput = styled.input`
    height: 50px;
    border: 1px solid #b5b5b5;
    font-size: 16px;
    color: #5b5b5b;
    padding: 2px 15px;
    border-radius: 10px;
    width: 100%;

    &:focus {
        border-color: #ff2454;
        outline: none;
    }

    ${props => props.type == 'number' && 'color: green;'}
`
export default TextInput