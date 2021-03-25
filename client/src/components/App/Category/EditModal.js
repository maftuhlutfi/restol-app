import Modal, { CloseBtn, ModalTitle } from '../../shared/Modal'
import { ModalBody } from '../../shared/Modal'
import InputGroup from "../../shared/input/InputGroup";
import TextInput from "../../shared/input/TextInput";
import ButtonGroup from "../../shared/ButtonGroup";
import StyledButton from "../../shared/StyledButton";
import FileInput from "../../shared/input/FileInput";

const EditModal = ({show, input, closeModal, handleChange}) => {
    const {name, icon} = input

    return (
        <Modal show={show}>
            <ModalBody width='500px'>
                <CloseBtn onClick={closeModal} />
                <ModalTitle>Add/Edit Product</ModalTitle>
                <InputGroup>
                    <TextInput name="name" value={name} onChange={handleChange} placeholder="Name" autoComplete='off' />
                    <FileInput accept='.png, .jpg, .jpeg, .svg' name="icon" value={icon} onChange={handleChange} label="Upload category photo" type="file" />
                </InputGroup>
                <ButtonGroup>
                    <StyledButton color='primary' variant='outlined' onClick={closeModal}>Cancel</StyledButton>
                    <StyledButton color='primary'>Save</StyledButton>
                </ButtonGroup>
            </ModalBody>
        </Modal>
    );
}
 
export default EditModal;