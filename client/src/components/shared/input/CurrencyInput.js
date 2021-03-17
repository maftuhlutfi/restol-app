import styled from "styled-components"
import TextInput from "./TextInput"

const Input = styled(TextInput)`
    padding-left: 55px;

    &:focus + span {
        background-color: #FF617A;
        color: white;
    }
`

const Wrapper = styled.div`
    height: auto;
    position: relative;
`
const Currency = styled.span`
    height: 50px;
    position: absolute;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: #dadada;
    border: 1px solid #dadada;
    border-radius: 10px 0 0 10px;
    left: -1px;
    top: 0px;

    ${props => !props.isEmpty && 'background-color: #FF617A;color: white;'}
`

const CurrencyInput = ({code, ...props}) => {
    return (
        <Wrapper>
            <Input type='number' {...props} />
            <Currency isEmpty={!props.value}>{code}</Currency>
        </Wrapper>
    );
}
 
export default CurrencyInput