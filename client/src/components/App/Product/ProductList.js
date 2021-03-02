import styled from "styled-components"

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 155px);
    grid-gap: 20px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }
`

export default ProductList