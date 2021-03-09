import styled from "styled-components"

const Wrapper = styled.select`
    height: 50px;
    border: 1px solid #b5b5b5;
    font-size: 16px;
    color: #5b5b5b;
    padding: 2px 15px;
    border-radius: 10px;
    width: 100%;
    display: none;
    position: relative;

    &:focus {
        border-color: #ff2454;
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }

    ${props => props.first == props.value && 'color: #c0c0c0;'}
`

const Option = styled.option`
    font-size: 16px;
    padding: 10px 20px;
`

const Select = ({options}) => {
    return (
        <Wrapper first={options[0].toLowerCase()}>
            {options.map((opt, index) => <Option key={index} value={opt.toLowerCase()}>{opt}</Option>)}
        </Wrapper>
    );
}
 
export default Select;