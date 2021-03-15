import styled from "styled-components"

const Select = styled.select`
    height: 50px;
    border: 1px solid #b5b5b5;
    font-size: 16px;
    color: #5b5b5b;
    padding: 2px 15px;
    border-radius: 10px;
    width: 100%;
    position: relative;

    &:focus {
        border-color: #ff2454;
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }

    & > option:first-child {
        display: none;
    }

    ${props => props.value === props.placeholder && 'color: #c0c0c0;'}
`
 
export default Select;