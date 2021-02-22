import styled from "styled-components"

const Title = styled.span`
    font-size: ${props => props.size ? props.size : '32px'};
    flex-grow: 1;

    span {
        font-weight: 600;
    }
`

const HeaderTitle = ({title, size}) => {
    const titleArray = title.split(" ")
    return (
        <Title size={size}>
            <span>{titleArray[0]}</span> {titleArray[1]}
        </Title>
    );
}
 
export default HeaderTitle;