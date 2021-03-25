import {useState} from 'react'
import HeaderTitle from "../Header/HeaderTitle";
import { ReactSVG } from "react-svg";
import Wrapper from './Wrapper'
import Header from './Header'
import IconWrapper from './IconWrapper'
import OrderList from './OrderList'
import OrderItem from './OrderItem'
import Detail from './Detail'
import styled from 'styled-components'
import items from './items'
import ChargeModal from './ChargeModal';
import StyledButton from '../../shared/StyledButton';

const NoOrderText = styled.span`
    text-align: center;
    font-size: 14px;
`

const OrderCard = ({view}) => {
    const [edit, setEdit] = useState(false)

    return (
        <Wrapper style={view && {width: '100%', padding: '0', boxShadow: 'none'}}>
            <Header>
                {!view ? <HeaderTitle size='22px' title='Add Order' /> : <div></div> }
                {edit ? 
                    <StyledButton size='sm' color='primary' variant='outlined' onClick={() => setEdit(false)}>
                        Done
                    </StyledButton>
                    :
                    <IconWrapper onClick={() => setEdit(true)}>
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
                {!view && <ChargeModal />}
                </>
            }
        </Wrapper>
    );
}
 
export default OrderCard;