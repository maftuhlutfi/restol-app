import Card from "../../shared/Card";

import styled from "styled-components"
import StyledButton from "../../shared/StyledButton";
import { ReactSVG } from "react-svg";

const Picture = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-image: url(${props => props.foto});
    background-position: center;
    background-size: cover;
    margin: auto;
    margin-bottom: 15px;
`

const Name = styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 7px;
    text-align: center;
`

const Price = styled.span`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 15px;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    
    button {
        padding: 8px;
        margin: 0 5px;
    }
`

const ProductItem = ({name, price, foto, edit}) => {
    return (
        <Card padding='25px' width='100%'>
            <Picture foto={foto} />
            <Name>{name}</Name>
            <Price>Rp. {price}</Price>
            {edit ? 
            <ButtonGroup>
                <StyledButton sm secondary>
                    <ReactSVG src='./assets/icon/edit.svg' />
                </StyledButton>
                <StyledButton sm primary>
                    <ReactSVG src='./assets/icon/delete.svg' />
                </StyledButton>
            </ButtonGroup>
            :
            <StyledButton sm primary>ADD</StyledButton>
            }
        </Card>
    );
}
 
export default ProductItem;