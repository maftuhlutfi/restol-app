import Header from "../../App/Header";
import SubHeader from "../../App/SubHeader";
import HeaderTitle from "../../App/Header/HeaderTitle";
import Dropdown from "../../shared/Dropdown";
import {ProductList, products, ProductItem, AddNewProduct} from "../../App/Product";
import { CategoryItem, CategoryList, categories, AddNewCategory } from "../../App/Category";
import { useState } from "react";

const ProductPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleClick(index) {
        setActiveIndex(index)
    }

    return (
        <>
            <Header title="All Product" search='Search Product' />
            <div>
                <CategoryList>
                    <AddNewCategory />
                    {categories.map((category, index) => <CategoryItem index={index} onClick={handleClick} active={activeIndex} key={index} {...category} />)}
                </CategoryList>
                <SubHeader>
                    <HeaderTitle title='Choose Product' size='28px' />
                    <Dropdown text='Sort by' list={['Popular', 'Name', 'Price']} />
                </SubHeader>
                <ProductList>
                    <AddNewProduct />
                    {products.map((product, index) => <ProductItem edit key={index} {...product} />)}
                </ProductList>
            </div>
        </>
    );
}
 
export default ProductPage;