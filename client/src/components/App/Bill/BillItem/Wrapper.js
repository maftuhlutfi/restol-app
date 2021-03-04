import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 20.8419px rgba(0, 0, 0, 0.08);

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    & > span {
        margin-top: 10px;
    }
`

export default Wrapper