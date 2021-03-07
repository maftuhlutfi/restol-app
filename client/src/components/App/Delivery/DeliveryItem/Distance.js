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
    margin-bottom: 10px;
`

const Distance = ({distance}) => {
    return (
        <Wrapper>
            {distance} KM
        </Wrapper>
    );
}
 
export default Distance;