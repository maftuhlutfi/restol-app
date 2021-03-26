import Detail from "./Detail";
import IdOrder from "./IdOrder";
import Name from "./Name";
import ViewCompleteBtn from "./ViewCompleteBtn";
import Wrapper from "./Wrapper";
import Distance from "./Distance";
import Done from "./Done";
import Address from "./Address";
import Time from "./Time";

const DeliveryItem = ({id, name, time, distance, completed, doneAt, address}) => {
    return (
        <Wrapper completed={completed}>
            <div>
                <IdOrder>#{id}</IdOrder>
                <Name>{name}</Name>
                {completed ? 
                    <Done doneAt={doneAt} />
                    :
                    <Address>
                        {address.slice(0, 30) + ' ...'}
                    </Address>
                }
            </div>
            <div>
                <Distance distance={distance} />
                {completed ? <Detail /> : <ViewCompleteBtn />}
                {!completed && <Time>{time}</Time>}
            </div>
        </Wrapper>
    );
}
 
export default DeliveryItem;