import styled from "styled-components"

const ListItem = styled.span`
    padding: 5px 15px;
    ${props => props.active && 'background-color: #FF617A;color:white;'}

    ${props => !props.active && '&:hover {background-color: #EAEAEA;'}
`

export default ListItem