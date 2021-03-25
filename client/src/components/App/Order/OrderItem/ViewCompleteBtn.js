import { useState } from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"
import ViewModal from "./ViewModal"
import ConfirmationModal from "../../../shared/ConfirmationModal";

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > span:not(:last-child) {
        margin-right: 10px;
    }
`

const IconBtn = styled.span`
    background-color: white;
    padding: 8px;
    border-radius: 5px;
    height: 30px;
    width: 30px;
    box-shadow: 0px 0px 7.42857px rgba(0, 0, 0, 0.13);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
        width: 20px;
        margin-top: 5px;
    }
`

const ViewCompleteBtn = () => {
    const [show, setShow] = useState(false)

    const showModal = name => {
        setShow(name)
    }

    const closeModal = () => {
        setShow(false)
    }

    return (
        <>
            <ButtonGroup>
                <IconBtn onClick={() => showModal('view')}>
                    <ReactSVG src='./assets/icon/view.svg' />
                </IconBtn>
                <IconBtn onClick={() => showModal('done')}>
                    <ReactSVG src='./assets/icon/check1.svg' />
                </IconBtn>
            </ButtonGroup>
            <ViewModal show={show == 'view'} closeModal={closeModal} />
            <ConfirmationModal
                title='Are you sure?'
                body='Are you sure the order has been completed? This process cannot be undone.'
                show={show == 'done'}
                closeModal={closeModal}
                confirm={() => console.log('Product deleted')}
                icon='./assets/icon/check-circle.svg'
            />
        </>
    );
}
 
export default ViewCompleteBtn;