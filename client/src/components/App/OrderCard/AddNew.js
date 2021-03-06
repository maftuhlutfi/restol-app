import Modal from '../../shared/Modal/Modal';
import ModalTitle from '../../shared/Modal/ModalTitle';
import ModalBody from '../../shared/Modal/ModalBody';
import InputGroup from "../../shared/input/InputGroup";
import TextInput from '../../shared/input/TextInput';
import Select from '../../shared/input/Select';
import { useState } from 'react';
import Option from '../../shared/input/Option';
import StyledButton from '../../shared/StyledButton';
import ButtonGroup from '../../shared/ButtonGroup';
import styled from 'styled-components'
import { CloseBtn } from '../../shared/Modal';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../../redux/selectors/cartSelector';

const Button = styled(StyledButton)`
    margin-top: 20px;
`

const AddNew = () => {
    const totalPrice = useSelector(state => selectTotalPrice(state))

    const options = ['Select payment method', 'Cash', 'Bank transfer']
    const [input, setInput] = useState({name: '', payment: options[0]})

    const [show, setShow] = useState(false)

    const handleChange = e => {
        const {value, name} = e.target

        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <Button onClick={() => setShow(true)} color='primary'>Add to order</Button>
            <Modal show={show} setShow={setShow}>
                <ModalBody width='500px'>
                    <CloseBtn onClick={() => setShow(false)} />
                    <ModalTitle>
                        Add new order
                    </ModalTitle>
                    <InputGroup>
                        <TextInput onChange={handleChange} name='name' value={input.name} placeholder='Name' autoComplete='off' />
                        <Select onChange={handleChange} name='payment' value={input.payment} placeholder='Select payment method'>
                            {options.map((opt, index) => <Option key={index} index={index} value={opt}>{opt}</Option>)}
                        </Select>
                    </InputGroup>
                    <ButtonGroup>
                        <StyledButton onClick={() => setShow(false)} color='disabled'>Cancel</StyledButton>
                        <StyledButton color='primary'>Add <span style={{fontWeight: '400'}}>Rp. {totalPrice + totalPrice * 1 / 10}</span></StyledButton>
                    </ButtonGroup>
                </ModalBody>
            </Modal>
        </>
    );
}
 
export default AddNew;