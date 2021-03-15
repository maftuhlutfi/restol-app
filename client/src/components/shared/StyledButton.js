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
        background: #FF617A;
        color: white;

        svg path {
            fill: white;
        }
    `,
    secondary: css`
        background: #ffdb6d;
        color: #5b5b5b;

        svg path {
            fill: #5b5b5b;
        }
    `,
    disabled: css`
        background: #e5e5e5;
        color: #5b5b5b;

        svg path {
            fill: #5b5b5b;
        }
    `,
}

const shadow = {
    primary: css`
        box-shadow: 0px 5px 15px rgba(255, 36, 84, 0.45);
    `,
    secondary: css`
        box-shadow: 0px 5px 15px rgba(255, 204, 50, 0.45);
    `,
    disabled: css`
        box-shadow: 0px 5px 15px rgba(10, 10, 10, 0.2);
    `,
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

    ${props => props.sm && size.sm}
    ${props => props.md && size.md}
    ${props => props.lg && size.lg}

    ${props => props.primary && color.primary + shadow.primary}
    ${props => props.secondary && color.secondary + shadow.secondary}
    ${props => props.disabled && color.disabled + shadow.disabled}
`

export default StyledButton;