import { delivery, DeliveryItem, DeliveryList } from "../../App/Delivery";
import Header from "../../App/Header";
import HeaderTitle from "../../App/Header/HeaderTitle";
import SubHeader from "../../App/SubHeader";
import Dropdown from "../../shared/Dropdown";

const DeliveryPage = () => {
    return (
        <>
            <Header title="Not Delivered" search='Search Delivery' />
            <DeliveryList>
                {delivery.filter(item => !item.completed).map((item) => <DeliveryItem key={item.id} {...item} />)}
            </DeliveryList>
            <SubHeader>
                <HeaderTitle title='Delivered Order' size='28px' />
                <Dropdown text='Show' list={['Today', 'This Week', 'This Month', 'All']} />
                <Dropdown text='Sort by' list={['Order id', 'Time', 'Distance']} />
            </SubHeader>
            <DeliveryList>
                {delivery.filter(item => item.completed).map((item) => <DeliveryItem key={item.id} {...item} />)}
            </DeliveryList>
        </>
    );
}
 
export default DeliveryPage;