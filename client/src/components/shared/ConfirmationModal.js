import { ReactSVG } from "react-svg";
import ButtonGroup from "./ButtonGroup";
import Modal, { CloseBtn, ModalBody, ModalText, ModalTitle } from "./Modal";
import StyledButton from "./StyledButton";

import styled from "styled-components"

const Icon = styled(ReactSVG)`
    height: 120px;
    margin-bottom: 20px;
    div {
        height: 120px;
    }
    svg {
        width: 120px;
        height: 120px;
    }
`

const ConfirmationModal = ({title, body, show, closeModal, confirm}) => {
    return (
        <Modal show={show}>
            <ModalBody width='500px'>
                <CloseBtn onClick={closeModal} />
                <Icon src='./assets/icon/delete-circle.svg' />
                <ModalTitle>
                    {title}
                </ModalTitle>
                <ModalText>
                    {body}
                </ModalText>
                <ButtonGroup>
                    <StyledButton color='primary' variant='outlined' onClick={closeModal}>No</StyledButton>
                    <StyledButton color='primary' onClick={confirm}>Yes</StyledButton>
                </ButtonGroup>
            </ModalBody>
        </Modal>
    );
}
 
export default ConfirmationModal;