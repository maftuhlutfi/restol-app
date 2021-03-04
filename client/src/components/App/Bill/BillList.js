import styled from "styled-components"

const BillList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    grid-gap: 20px;

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, 100%);
    }
`

export default BillList