import styled from "styled-components"

const Wrapper = styled.span`
    background-color: #FF617A;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    font-weight: 500;
    padding: 2px 5px;
    width: 100%;
    text-align:center;
`

const Time = ({time}) => {
    return (
        <Wrapper>
            {time} min.
        </Wrapper>
    );
}
 
export default Time;