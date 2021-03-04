import Detail from "./Detail";
import IdOrder from "./IdOrder";
import Name from "./Name";
import Time from "./Time";
import Type from "./Type";
import ViewCompleteBtn from "./ViewCompleteBtn";
import Wrapper from "./Wrapper";

const OrderItem = ({id, name, time, type, completed, doneAt}) => {
    return (
        <Wrapper completed={completed}>
            <div>
                <IdOrder>#{id}</IdOrder>
                <Name>{name}</Name>
                <Time time={time} completed={completed} doneAt={doneAt} />
            </div>
            <div>
                <Type>{type}</Type>
                {completed ? <Detail /> : <ViewCompleteBtn />}
            </div>
        </Wrapper>
    );
}
 
export default OrderItem;