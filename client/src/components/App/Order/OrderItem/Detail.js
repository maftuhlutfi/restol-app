import { useState } from "react";
import styled from "styled-components"
import ViewModal from "./ViewModal";

const Wrapper = styled.span`
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    padding: 7px 15px;
    font-weight: 500;
    cursor: pointer;
`

const Detail = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <Wrapper onClick={() => setShow(true)}>
                Details
            </Wrapper>
            <ViewModal 
                show={show}
                closeModal={() => setShow(false)}
                done
            />
        </>
    );
}
 
export default Detail;