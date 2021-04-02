import Header from "../../App/Header";
import SubHeader from "../../App/SubHeader";
import HeaderTitle from "../../App/Header/HeaderTitle";
import Dropdown from "../../shared/Dropdown";
import {ProductList, ProductItem} from "../../App/Product";
import Content from "./Content";
import OrderCard from "../../App/OrderCard";
import { CategoryItem, CategoryList } from "../../App/Category";
import { useEffect, useState } from "react";
import { getCategoryStart } from "../../../redux/actions/categoryActions";

import { useDispatch, useSelector } from "react-redux";
import { selectCategoryItems } from "../../../redux/selectors/categorySelector";
import { selectProductItems } from "../../../redux/selectors/productSelector";
import { getProductStart } from "../../../redux/actions/productActions";

const HomePage = () => {
    const dispatch = useDispatch()
    const categories = [{id: 0, nama: 'Populer',icon: 'fire.svg'}, ...useSelector(state => selectCategoryItems(state))]
    const products = useSelector(state => selectProductItems(state))

    const dropdownList = ['Popular', 'Name', 'Price']

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSort, setActiveSort] = useState(dropdownList[0])
    const [search, setSearch] = useState('')

    const handleClick = index => {
        setActiveIndex(index)
    }

    const handleDropdownChange = li => {
        setActiveSort(li)
    }

    const handleSearchInputChange = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        dispatch(getCategoryStart())
    }, [])
    
    useEffect(() => {
        dispatch(getProductStart())
    }, [])

    const filterAndSortProduct = () => {
        let filteredProduct = activeIndex === 0 ? products : products.filter(product => product.kategori === activeIndex)
        filteredProduct = filteredProduct.filter(product => product.nama.toLowerCase().includes(search.toLowerCase()))

        switch (activeSort) {
            case 'Popular':
                return filteredProduct.sort((a, b) => +b.total_penjualan - +a.total_penjualan)
            case 'Name':
                return filteredProduct.sort((a, b) => a.nama > b.nama ? 1 : -1)
            case 'Price':
                return filteredProduct.sort((a, b) => a.harga - b.harga)
            default:
                return filteredProduct
        }
    }

    return (
        <>
            <Header title="Menu Category" search='Search Product' value={search} handleChange={handleSearchInputChange} />
            <Content>
                <div>
                    <CategoryList>
                        {categories && 
                            categories.map((category, index) => <CategoryItem index={category.id} onClick={handleClick} active={activeIndex} key={index} {...category} />)}
                    </CategoryList>
                    <SubHeader>
                        <HeaderTitle title='Choose Product' size='28px' />
                        <Dropdown text='Sort by' list={dropdownList} active={activeSort} handleChange={handleDropdownChange} />
                    </SubHeader>
                    <ProductList>
                        {products && 
                            filterAndSortProduct().map((product, index) => <ProductItem key={index} product={product} />)}
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