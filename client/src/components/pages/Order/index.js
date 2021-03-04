import Header from "../../App/Header";
import HeaderTitle from "../../App/Header/HeaderTitle";
import { OrderItem, OrderList, orders } from "../../App/Order";
import SubHeader from "../../App/SubHeader";
import Dropdown from "../../shared/Dropdown";

const OrderPage = () => {
    return (
        <>
            <Header title="Order List" search='Search Order' />
            <OrderList>
                {orders.filter(order => !order.completed).map((order) => <OrderItem key={order.id} {...order} />)}
            </OrderList>
            <SubHeader>
                <HeaderTitle title='Completed Order' size='28px' />
                <Dropdown text='Show' list={['Today', 'This Week', 'This Month', 'All']} />
                <Dropdown text='Sort by' list={['Popular', 'Name', 'Price']} />
            </SubHeader>
            <OrderList>
                {orders.filter(order => order.completed).map((order) => <OrderItem key={order.id} {...order} />)}
            </OrderList>
        </>
    );
}
 
export default OrderPage;