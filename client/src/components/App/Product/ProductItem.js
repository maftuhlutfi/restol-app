import Card from "../../shared/Card";

import styled from "styled-components"
import StyledButton from "../../shared/StyledButton";
import DeleteProduct from './DeleteProduct'
import EditProduct from "./EditProduct";

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

const ProductItem = ({product, edit}) => {
    const {nama, harga, foto} = product

    return (
        <>
            <Card padding='25px' width='100%'>
                <Picture foto={foto} />
                <Name>{nama}</Name>
                <Price>Rp. {harga}</Price>
                {edit ? 
                <ButtonGroup>
                    <EditProduct initData={product} />
                    <DeleteProduct />
                </ButtonGroup>
                :
                <StyledButton size='sm' color='primary'>ADD</StyledButton>
                }
            </Card>
        </>
    );
}
 
export default ProductItem;