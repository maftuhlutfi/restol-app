import { BillList, bills, BillItem } from "../../App/Bill";
import Header from "../../App/Header";
import HeaderTitle from "../../App/Header/HeaderTitle";
import SubHeader from "../../App/SubHeader";
import Dropdown from "../../shared/Dropdown";

const BillPage = () => {
    return (
        <>
            <Header title="Unpaid Bills" search='Search Bills' />
            <BillList>
                {bills.filter(order => !order.completed).map((order) => <BillItem key={order.id} {...order} />)}
            </BillList>
            <SubHeader>
                <HeaderTitle title='Paid Bills' size='28px' />
                <Dropdown text='Show' list={['Today', 'This Week', 'This Month', 'All']} />
                <Dropdown text='Sort by' list={['Newest', 'Name', 'Price']} />
            </SubHeader>
            <BillList>
                {bills.filter(order => order.completed).map((order) => <BillItem key={order.id} {...order} />)}
            </BillList>
        </>
    );
}
 
export default BillPage;