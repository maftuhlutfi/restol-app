import Card from "../../shared/Card";

import styled from "styled-components"
import { ReactSVG } from "react-svg";
import Modal, { CloseBtn, ModalTitle } from '../../shared/Modal'
import { ModalBody } from '../../shared/Modal'
import { useState } from "react";
import InputGroup from "../../shared/input/InputGroup";
import TextInput from "../../shared/input/TextInput";
import Select from "../../shared/input/Select";
import Option from "../../shared/input/Option";
import ButtonGroup from "../../shared/ButtonGroup";
import StyledButton from "../../shared/StyledButton";

const Icon = styled.div`
    background-color: white;
    border-radius: 10px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: dashed 2px #e5e5e5;
    margin-bottom: 10px;

    svg {
        width: 60px;

        path {
            fill: ${props => props.active === 'true' ? '#262626' : '#B5B5B5'};
        }
    }
`

const Text = styled.span`
    font-size: 18px;
    margin-top: 10px;
    color: #b5b5b5;
    text-align: center;
`

const AddNewProduct = () => {
    const options = ['Category', 'Makanan', 'Minuman']
    const [input, setInput] = useState({
        name: '', 
        category: options[0],
        price: '',
        discount: '',
        foto: ''
    })

    const {name, category, price, discount, foto} = input

    const [show, setShow] = useState(false)
    
    const handleChange = e => {
        const nameInput = e.target.name
        setInput(prev => ({
            ...prev,
            [nameInput]: e.target.value
        }))
    }

    return (
        <>
            <Card onClick={() => setShow(true)} padding='25px' width='100%'>
                <Icon>
                    <ReactSVG src='./assets/icon/plus.svg' />
                </Icon>
                <Text>
                    Add new
                </Text>
            </Card>
            <Modal show={show}>
                <ModalBody width='500px'>
                    <CloseBtn onClick={() => setShow(false)} />
                    <ModalTitle>Add/Edit Product</ModalTitle>
                    <InputGroup>
                        <TextInput name="name" value={name} onChange={handleChange} placeholder="Name" autoComplete='off' />
                        <Select onChange={handleChange} name='category' value={category} placeholder='Category'>
                            {options.map((opt, index) => <Option key={index} index={index} value={opt}>{opt}</Option>)}
                        </Select>
                        <TextInput name="price" value={price} onChange={handleChange} placeholder="Price" type="number" autoComplete='off' />
                        <TextInput name="discount" value={discount} onChange={handleChange} placeholder="Discount" autoComplete='off' />
                        <TextInput name="foto" value={foto} onChange={handleChange} placeholder="Foto" type="file" />
                    </InputGroup>
                    <ButtonGroup>
                        <StyledButton disabled onClick={() => setShow(false)}>Cancel</StyledButton>
                        <StyledButton primary>Save</StyledButton>
                    </ButtonGroup>
                </ModalBody>
            </Modal>
        </>
    );
}
 
export default AddNewProduct;