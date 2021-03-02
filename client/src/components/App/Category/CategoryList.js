import styled from "styled-components"
import transparentScroll from "../../styled-css/transparent-scroll"

const CategoryList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 120px);
    grid-gap: 20px;
    

    @media (max-width: 600px) {
        display: flex;
        overflow-x: scroll;
    }

    ${transparentScroll}
`

export default CategoryList