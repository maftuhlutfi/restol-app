import Modal from '../../../shared/Modal/Modal';
import ModalTitle from '../../../shared/Modal/ModalTitle';
import ModalBody from '../../../shared/Modal/ModalBody';
import InputGroup from "../../../shared/input/InputGroup";
import TextInput from '../../../shared/input/TextInput';
import Select from '../../../shared/input/Select';
import { useState } from 'react';
import Option from '../../../shared/input/Option';
import StyledButton from '../../../shared/StyledButton';
import ButtonGroup from '../../../shared/ButtonGroup';
import { CloseBtn } from '../../../shared/Modal';

const ChargeModal = ({show, closeModal, name, price}) => {
    const options = ['Select payment method', 'Cash', 'Bank transfer']
    const [input, setInput] = useState({paidBy: name, payment: options[0]})

    const handleChange = e => {
        const {value} = e.target
        const targetName = e.target.name

        setInput(prev => ({
            ...prev,
            [targetName]: value
        }))
    }

    return (
        <Modal show={show}>
            <ModalBody width='500px'>
                <CloseBtn onClick={closeModal} />
                <ModalTitle>
                    Pay bill
                </ModalTitle>
                <InputGroup>
                    <TextInput onChange={handleChange} name='paidBy' value={input.paidBy} placeholder='Paid by' autoComplete='off' />
                    <Select onChange={handleChange} name='payment' value={input.payment} placeholder='Select payment method'>
                        {options.map((opt, index) => <Option key={index} index={index} value={opt}>{opt}</Option>)}
                    </Select>
                </InputGroup>
                <ButtonGroup>
                    <StyledButton color='primary'>Charge <span style={{fontWeight: '400'}}>{price}</span></StyledButton>
                </ButtonGroup>
            </ModalBody>
        </Modal>
    );
}
 
export default ChargeModal;