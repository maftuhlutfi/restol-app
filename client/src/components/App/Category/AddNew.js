import { ReactSVG } from "react-svg";
import Card from "../../shared/Card";
import DescTitle from "../../shared/text/DescTitle";
import CategoryIcon from "./CategoryIcon";
import Modal, { CloseBtn, ModalTitle } from '../../shared/Modal'
import { ModalBody } from '../../shared/Modal'
import { useState } from "react";
import InputGroup from "../../shared/input/InputGroup";
import TextInput from "../../shared/input/TextInput";
import Select from "../../shared/input/Select";
import Option from "../../shared/input/Option";
import ButtonGroup from "../../shared/ButtonGroup";
import StyledButton from "../../shared/StyledButton";
import FileInput from "../../shared/input/FileInput";
import CurrencyInput from "../../shared/input/CurrencyInput";


const AddNewCategory = () => {
    const [input, setInput] = useState({
        name: '', 
        icon: ''
    })

    const {name, icon} = input

    const [show, setShow] = useState(false)

    const handleChange = e => {
        const nameInput = e.target.name
        setInput(prev => ({
            ...prev,
            [nameInput]: e.target.value
        }))
    }

    const closeModal = () => {
        setInput({
            name: '', 
            icon: ''
        })
        setShow(false)
    }

    return (
        <>
            <Card width='120px' onClick={() => setShow(true)}>
                <CategoryIcon dashed>
                    <ReactSVG src={`./assets/icon/plus.svg`} />
                </CategoryIcon>
                <DescTitle color='#b5b5b5' mb='0'>
                    Add new
                </DescTitle>
            </Card>
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
        </>
    );
}
 
export default AddNewCategory;