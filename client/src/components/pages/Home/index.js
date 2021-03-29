import Header from "../../App/Header";
import SubHeader from "../../App/SubHeader";
import HeaderTitle from "../../App/Header/HeaderTitle";
import Dropdown from "../../shared/Dropdown";
import {ProductList, products, ProductItem} from "../../App/Product";
import Content from "./Content";
import OrderCard from "../../App/OrderCard";
import { CategoryItem, CategoryList } from "../../App/Category";
import { useEffect, useState } from "react";
import { getCategoryStart } from "../../../redux/actions/categoryActions";

import { useDispatch, useSelector } from "react-redux";
import { selectCategoryItems } from "../../../redux/selectors/categorySelector";

const HomePage = () => {
    const dispatch = useDispatch()
    const categories = [{id: 0, nama: 'Populer',icon: 'fire.svg'}, ...useSelector(state => selectCategoryItems(state))]

    const [activeIndex, setActiveIndex] = useState(0);

    function handleClick(index) {
        setActiveIndex(index)
    }

    useEffect(() => {
        dispatch(getCategoryStart())
    }, [])

    return (
        <>
            <Header title="Menu Category" search='Search Product' />
            <Content>
                <div>
                    <CategoryList>
                        {categories && 
                            categories.map((category, index) => <CategoryItem index={index} onClick={handleClick} active={activeIndex} key={index} {...category} />)}
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