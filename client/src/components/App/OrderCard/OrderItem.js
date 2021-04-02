import { useDispatch } from 'react-redux'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'
import { addItem, clearItem, removeItem } from '../../../redux/actions/cartActions'
import IconWrapper from './IconWrapper'
import Text from './Text'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
`

const Picture = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
`

const Name = styled.span`
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
`

const Qty = styled.span`
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
`

const EditQty = styled.div`
    display: flex;

    button {
        padding: 2px 7px;
        width: 25px;
        font-size: 16px;
        background-color: #ff617a;
        border: none;
        color: white;
        font-weight: 500;
        border-radius: 5px;
        cursor: pointer;

        &:focus {
            filter: brightness(95%);
            outline: none;
        }
    }

    span {
        font-size: 16px;
        padding: 2px 10px;
        border: solid 1px #c0c0c0;
        margin: 0 3px;
        border-radius: 5px;
    }
`

const NamePriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Delete = styled(IconWrapper)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    opacity: .9;

    svg {
        width: 30px;
        margin-top: 5px;
    }
`

const OrderItem = ({ edit, ...product }) => {
    const dispatch = useDispatch()

    const {picture, name, harga, quantity} = product

    const handleAdd = () => {
        dispatch(addItem(product))
    }

    const handleRemove = () => {
        dispatch(removeItem(product))
    }

    const handleClear = () => {
        dispatch(clearItem(product))
    }

    return (
        <Wrapper>
            {edit && <Delete onClick={handleClear}><ReactSVG src='./assets/icon/delete.svg' /></Delete>}
            <Picture url={picture} />
            <NamePriceWrapper>
                <Name>{name}</Name>
                <Text>Rp. {harga}</Text>
            </NamePriceWrapper>
            {edit ? 
                <EditQty>
                    <button onClick={handleRemove}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleAdd}>+</button>
                </EditQty>
                :
                <Qty>
                    x{quantity}
                </Qty>
            }
            {!edit && <Text>Rp. {harga*quantity}</Text>}
        </Wrapper>
    );
}
 
export default OrderItem;