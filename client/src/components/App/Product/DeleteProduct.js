import { useState } from "react";
import { ReactSVG } from "react-svg";
import ConfirmationModal from "../../shared/ConfirmationModal";
import StyledButton from "../../shared/StyledButton";

const DeleteProduct = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <StyledButton size='sm' color='primary' onClick={() => setShow(true)}>
                <ReactSVG src='./assets/icon/delete.svg' />
            </StyledButton>
            <ConfirmationModal
                title='Are you sure?'
                body='Do you really want to delete these product? This process cannot be undone.'
                show={show}
                closeModal={() => setShow(false)}
                confirm={() => console.log('Product deleted')}
            />
        </>
    );
}
 
export default DeleteProduct;