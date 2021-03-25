import { useState } from "react";
import { ReactSVG } from "react-svg";
import ConfirmationModal from "../../shared/ConfirmationModal";
import StyledButton from "../../shared/StyledButton";

const DeleteCategory = ({onClick, onClose}) => {
    const [show, setShow] = useState(false)

    const closeModal = () => {
        setShow(false);
    }

    return (
        <div onClick={onClick}>
            <StyledButton size='sm' color='primary' onClick={() => setShow(true)}>
                <ReactSVG src='./assets/icon/delete.svg' />
            </StyledButton>
            <ConfirmationModal
                title='Are you sure?'
                body='Do you really want to delete these category? This process cannot be undone.'
                show={show}
                closeModal={closeModal}
                confirm={() => console.log('Product deleted')}
            />
        </div>
    );
}
 
export default DeleteCategory;