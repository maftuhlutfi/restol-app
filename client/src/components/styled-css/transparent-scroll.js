import {css} from "styled-components"

const transparentScroll = css`
    ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    }
    ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: transparent;
    border: 0px none transparent;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: transparent;
    }
    ::-webkit-scrollbar-thumb:active {
    background: transparent;
    }
    ::-webkit-scrollbar-track {
    background: transparent;
    border: 0px none #ffffff;
    }
    ::-webkit-scrollbar-track:hover {
    background: transparent;
    }
    ::-webkit-scrollbar-track:active {
    background: transparent;
    }
    ::-webkit-scrollbar-corner {
    background: transparent;
    }
`

export default transparentScroll