import IdOrder from "./IdOrder";
import Name from "./Name";
import Via from "./Via";
import Wrapper from "./Wrapper";
import Time from "./Time";
import Done from "./Done";
import TotalPrice from "./TotalPrice";
import { useState } from "react";
import ChargeModal from "./ChargeModal";

const BillItem = ({id, name, time, paymentType, completed, doneAt, via, price}) => {
    const [hover, setHover] = useState(false)
    const [show, setShow] = useState(false)

    const showModal = modalName => {
        setShow(modalName)
    }

    const closeModal = () => {
        setShow(false)
    }

    return (
        <>
            <Wrapper completed={completed} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                <div>
                    <div>
                        <IdOrder>#{id}</IdOrder>
                        <Name>{name}</Name>
                        <Via>via {via}</Via>
                    </div>
                    <div>
                        <Time>{time}</Time>
                        {!completed ? 
                            <TotalPrice onClick={() => showModal('pay')}>{hover ? 'Pay bill' : `Rp. ${price}`}</TotalPrice>
                            :
                            <TotalPrice onClick={() => showModal('detail')} completed={completed}>{`Rp. ${price}`}</TotalPrice>
                        }
                    </div>
                </div>
                {completed && <Done doneAt={doneAt} paymentType={paymentType} />}
            </Wrapper>
            <ChargeModal
                show={show == 'pay'}
                closeModal={closeModal}
                name={name}
                price={price}
            />
        </>
    );
}
 
export default BillItem;