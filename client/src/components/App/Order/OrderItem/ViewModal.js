import Modal, { CloseBtn, ModalBody, ModalTitle } from "../../../shared/Modal";
import OrderCard from "../../OrderCard";

const ViewModal = ({show, closeModal, done}) => {
    return (
        <Modal show={show}>
            <ModalBody width='450px'>
                <CloseBtn onClick={closeModal} />
                <ModalTitle style={{marginBottom: done ?  '30px' : '10px'}}>Order Details</ModalTitle>
                <OrderCard view done={done} />
            </ModalBody>
        </Modal>
    );
}
 
export default ViewModal;