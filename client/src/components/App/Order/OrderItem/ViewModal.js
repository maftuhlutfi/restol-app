import Modal, { CloseBtn, ModalBody, ModalTitle } from "../../../shared/Modal";
import OrderCard from "../../OrderCard";

const ViewModal = ({show, closeModal}) => {
    return (
        <Modal show={show}>
            <ModalBody width='450px'>
                <CloseBtn onClick={closeModal} />
                <ModalTitle style={{marginBottom: '10px'}}>Order Details</ModalTitle>
                <OrderCard view />
            </ModalBody>
        </Modal>
    );
}
 
export default ViewModal;