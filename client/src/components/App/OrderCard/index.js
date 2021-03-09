import {useState} from 'react'
import HeaderTitle from "../Header/HeaderTitle";
import { ReactSVG } from "react-svg";
import StyledButton from "../../shared/StyledButton";
import Wrapper from './Wrapper'
import Header from './Header'
import IconWrapper from './IconWrapper'
import OrderList from './OrderList'
import OrderItem from './OrderItem'
import Detail from './Detail'
import styled from 'styled-components'
import items from './items'
import Modal from '../../shared/Modal/Modal';
import ModalTitle from '../../shared/Modal/ModalTitle';
import ModalBody from '../../shared/Modal/ModalBody';
import InputGroup from "../../shared/input/InputGroup";
import TextInput from '../../shared/input/TextInput';
import Select from '../../shared/input/Select';

const Button = styled(StyledButton)`
    margin-top: 20px;
`

const NoOrderText = styled.span`
    text-align: center;
    font-size: 14px;
`

const OrderCard = () => {
    const [edit, setEdit] = useState(false);
    const [showModal, setShowModal] = useState(false)

    return (
        <Wrapper>
            <Header>
                <HeaderTitle size='22px' title='Add Order' />
                {!true && 
                <IconWrapper onClick={() => setEdit(prev => !prev)}>
                    <ReactSVG src='./assets/icon/edit.svg' />
                </IconWrapper>
                }
            </Header>
            {false ? 
                <NoOrderText>No product to order.</NoOrderText>
                :
                <>
                <OrderList>
                    {items.map((item, index) => <OrderItem key={index} {...item} edit={edit} />)}
                </OrderList>
                <Detail />
                <Button onClick={() => setShowModal(true)} primary>Add to order</Button>
                </>
            }
            <Modal show={showModal}>
                <ModalBody width='500px'>
                    <ModalTitle>
                        Charge the Bill
                    </ModalTitle>
                    <InputGroup>
                        <TextInput placeholder='Name' autoComplete='false' />
                        <Select options={['Select payment method', 'Cash', 'Bank transfer']} />
                    </InputGroup>
                </ModalBody>
            </Modal>
        </Wrapper>
    );
}
 
export default OrderCard;