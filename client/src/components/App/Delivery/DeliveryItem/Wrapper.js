import styled, { css } from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #FFDB6D;
    padding: 15px 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 20.8419px rgba(0, 0, 0, 0.08);

    ${props => props.completed && completed}

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const completed = css`
    background-color: white;
    box-shadow: 0px 0px 20.8419px rgba(0, 0, 0, 0.08);
`

export default Wrapper