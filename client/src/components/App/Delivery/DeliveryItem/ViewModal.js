import Modal, { CloseBtn, ModalBody, ModalTitle } from "../../../shared/Modal";
import styled from "styled-components"

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`

const Detail = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    justify-content: flex-start;
`

const Name = styled.span`
    font-weight: 600;
    margin-bottom: 5px;
`

const Value = styled.span`
    word-wrap: break-word;
    opacity: .7;
`

const ViewModal = ({show, closeModal, done}) => {
    return (
        <Modal show={show}>
            <ModalBody width='450px'>
                <CloseBtn onClick={closeModal} />
                <ModalTitle>Delivery Details</ModalTitle>
                <Details>
                    <Detail>
                        <Name>Order ID</Name>
                        <Value>asdsasdaaaaaaaaaaaaaaaaaaaaaaaaaaa</Value>
                    </Detail>
                    <Detail>
                        <Name>Name</Name>
                        <Value>asdsa</Value>
                    </Detail>
                    <Detail>
                        <Name>Courier</Name>
                        <Value>Handaru</Value>
                    </Detail>
                    <Detail>
                        <Name>Address</Name>
                        <Value>asdsa</Value>
                    </Detail>
                    {done && 
                        <Detail>
                            <Name>Done at</Name>
                            <Value>15:00</Value>
                        </Detail>
                    }
                </Details>
            </ModalBody>
        </Modal>
    );
}
 
export default ViewModal;