import IdOrder from "./IdOrder";
import Name from "./Name";
import Via from "./Via";
import Wrapper from "./Wrapper";
import Time from "./Time";
import Done from "./Done";
import TotalPrice from "./TotalPrice";

const BillItem = ({id, name, time, paymentType, completed, doneAt, via, price}) => {
    return (
        <Wrapper completed={completed}>
            <div>
                <div>
                    <IdOrder>#{id}</IdOrder>
                    <Name>{name}</Name>
                    <Via>via {via}</Via>
                </div>
                <div>
                    <Time>{time}</Time>
                    <TotalPrice completed={completed}>Rp. {price}</TotalPrice>
                </div>
            </div>
            {completed && <Done doneAt={doneAt} paymentType={paymentType} />}
        </Wrapper>
    );
}
 
export default BillItem;