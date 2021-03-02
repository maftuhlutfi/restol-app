import styled from "styled-components"

const Content = styled.div`
    display: flex;
    flex-direction: row;

    & > div:nth-child(1) {
        min-width: 70%;
        margin-right: 40px;
    }

    & > div:nth-child(2) {
        width: -webkit-fill-available;
    }

    @media (max-width: 600px) {
        & > div:nth-child(1) {
            min-width: 100%;
        }
        & > div:nth-child(2) {
            display:none;
        }
    }
`

export default Content