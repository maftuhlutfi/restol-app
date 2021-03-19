import Header from "../../App/Header";
import SubHeader from "../../App/SubHeader";
import HeaderTitle from "../../App/Header/HeaderTitle";
import Dropdown from "../../shared/Dropdown";
import {ProductList, products, ProductItem} from "../../App/Product";
import Content from "./Content";
import OrderCard from "../../App/OrderCard";
import { CategoryItem, CategoryList, categories } from "../../App/Category";
import { useState } from "react";

const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleClick(index) {
        setActiveIndex(index)
    }

    return (
        <>
            <Header title="Menu Category" search='Search Product' />
            <Content>
                <div>
                    <CategoryList>
                        {categories.map((category, index) => <CategoryItem index={index} onClick={handleClick} active={activeIndex} key={index} {...category} />)}
                    </CategoryList>
                    <SubHeader>
                        <HeaderTitle title='Choose Product' size='28px' />
                        <Dropdown text='Sort by' list={['Popular', 'Name', 'Price']} />
                    </SubHeader>
                    <ProductList>
                        {products.map((product, index) => <ProductItem key={index} product={product} />)}
                    </ProductList>
                </div>
                <div>
                    <OrderCard />
                </div>
            </Content>
        </>
    );
}
 
export default HomePage;