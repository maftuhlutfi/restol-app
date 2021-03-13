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

const ChargeModal = ({show}) => {
    const options = ['Select payment method', 'Cash', 'Bank transfer']
    const [input, setInput] = useState({name: '', payment: options[0]})

    const handleChange = e => {
        const {value, name} = e.target

        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <Modal show={show}>
            <ModalBody width='500px'>
                <ModalTitle>
                    Charge the Bill
                </ModalTitle>
                <InputGroup>
                    <TextInput onChange={handleChange} name='name' value={input.name} placeholder='Name' autoComplete='false' />
                    <Select onChange={handleChange} name='payment' value={input.payment}>
                        {options.map((opt, index) => <Option key={index} index={index} value={opt}>{opt}</Option>)}
                    </Select>
                </InputGroup>
                <ButtonGroup>
                    <StyledButton primary>Charge <span style={{fontWeight: '400'}}>Rp. 16.500</span></StyledButton>
                </ButtonGroup>
            </ModalBody>
        </Modal>
    );
}
 
export default ChargeModal;