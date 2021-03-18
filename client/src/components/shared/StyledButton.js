import styled, { css } from "styled-components";

const size = {
    sm: css`
        font-size: 16px;
        height: 35px;
    `,
    md: css`
        font-size: 18px;
        height: 50px;
    `,
    lg: css`
        font-size: 24px;
        height: 60px;
    `
}

const color = {
    primary: css`
        background: #ff617a;
        color: white;
        box-shadow: 0px 5px 15px rgba(255, 36, 84, 0.45);

        svg path {
            fill: white;
        }
    `,
    secondary: css`
        background: #ffdb6d;
        color: #5b5b5b;
        box-shadow: 0px 5px 15px rgba(255, 204, 50, 0.45);

        svg path {
            fill: #5b5b5b;
        }
    `,
    disabled: css`
        background: #e5e5e5;
        color: #5b5b5b;
        box-shadow: 0px 5px 15px rgba(10, 10, 10, 0.2);

        svg path {
            fill: #5b5b5b;
        }
    `,
}

const variant = {
    outlined: {
        primary: css`
            background: white;
            color: #ff617a;
            box-shadow: none;
            border: solid 1px #ff617a;

            svg path {
                fill: #ff617a;
            }
        `,
        secondary: css`
            background: #5b5b5b;
            color: #ffdb6d;
            box-shadow: none;
            border: solid 1px #ffdb6d;

            svg path {
                fill: #ffdb6d;
            }
        `
    }
}

const StyledButton = styled.button`
    padding: 5px 15px;
    text-align: center;
    font-size: 18px;
    height: 50px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    font-family: "Poppins";
    cursor: pointer;

    &:focus {
        outline: none;
        filter: brightness(95%);
    }

    ${props => props.size && size[props.size]} 
    ${props => props.color && color[props.color]}
    ${props => props.variant && variant[props.variant][props.color]}
`

export default StyledButton;