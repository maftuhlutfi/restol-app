import Modal, { CloseBtn, ModalTitle } from '../../shared/Modal'
import { ModalBody } from '../../shared/Modal'
import InputGroup from "../../shared/input/InputGroup";
import TextInput from "../../shared/input/TextInput";
import Select from "../../shared/input/Select";
import Option from "../../shared/input/Option";
import ButtonGroup from "../../shared/ButtonGroup";
import StyledButton from "../../shared/StyledButton";
import FileInput from "../../shared/input/FileInput";
import CurrencyInput from "../../shared/input/CurrencyInput";

const EditModal = ({show, input, closeModal, handleChange, options}) => {
    const {name, category, price, discount, foto} = input

    return (
        <Modal show={show}>
            <ModalBody width='500px'>
                <CloseBtn onClick={closeModal} />
                <ModalTitle>Add/Edit Product</ModalTitle>
                <InputGroup>
                    <TextInput name="name" value={name} onChange={handleChange} placeholder="Name" autoComplete='off' />
                    <Select onChange={handleChange} name='category' value={category} placeholder='Category'>
                        {options.map((opt, index) => <Option key={index} index={index} value={opt}>{opt}</Option>)}
                    </Select>
                    <CurrencyInput code='Rp' name="price" value={price} onChange={handleChange} placeholder="Price" autoComplete='off' />
                    <TextInput name="discount" value={discount} onChange={handleChange} placeholder="Discount in %" autoComplete='off' />
                    <FileInput accept='.png, .jpg, .jpeg' name={`foto-${name.toLowerCase().replaceAll(' ', '-')}`} value={foto} onChange={handleChange} label="Upload product photo" type="file" />
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