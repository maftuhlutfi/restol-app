import styled from "styled-components";

const InputGroup = styled.form`
    margin: 0px;
    margin-bottom: 30px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;

    & > *:not(:last-child) {
        margin-bottom: 15px;
    }
`

export default InputGroup