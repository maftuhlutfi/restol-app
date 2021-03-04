import styled from "styled-components"

const TotalPrice = styled.span`
    font-size: 18px;
    font-weight: 600;
    padding: 7px 15px;
    border-radius: 10px;
    background-color: ${props => props.completed ? '#FFDB6D' : '#FF617A'};
    color: ${props => props.completed ? '#5b5b5b' : 'white'};
`

export default TotalPrice