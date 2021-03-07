import styled from "styled-components"

const Wrapper = styled.span`
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    padding: 7px 15px;
    font-weight: 500;
`

const Detail = () => {
    return (
        <Wrapper>
            Details
        </Wrapper>
    );
}
 
export default Detail;