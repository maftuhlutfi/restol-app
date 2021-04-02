import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTotalPrice } from '../../../redux/selectors/cartSelector'
import Text from './Text'

const DetailWrapper = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Detail = () => {
    const totalPrice = useSelector(state => selectTotalPrice(state))

    return (
        <>
            <DetailWrapper>
                <Text color='#b5b5b5'>Sub Total</Text>
                <Text color='#5b5b5b' weight='600'>Rp. {totalPrice}</Text>
            </DetailWrapper>
            <DetailWrapper>
                <Text color='#b5b5b5'>PPn (10%)</Text>
                <Text weight='500' color='#b5b5b5'>Rp. {totalPrice * 1 / 10}</Text>
            </DetailWrapper>
            <DetailWrapper>
                <Text>Total Payment</Text>
                <Text color='#5b5b5b' weight='600' size='16px'>Rp. {totalPrice + totalPrice * 1 / 10}</Text>
            </DetailWrapper>
        </>
    );
}
 
export default Detail;