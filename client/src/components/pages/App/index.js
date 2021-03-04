import { Route, Switch } from "react-router-dom";
import Navigation from "../../App/Navigation";
import HomePage from "../Home";
import OrderPage from "../Order";
import ProductPage from "../Product";
import Content from "./Content";
import Wrapper from "./Wrapper";

const AppPages = () => {
    return (
        <Wrapper>
            <Navigation />
            <Content>
                <Switch>
                    <Route 
                        exact 
                        path='/' 
                        render={() => <HomePage />}
                    />
                    <Route 
                        exact 
                        path='/product' 
                        render={() => <ProductPage />}
                    />
                    <Route 
                        exact 
                        path='/order' 
                        render={() => <OrderPage />}
                    />
                </Switch>
            </Content>
        </Wrapper>
    );
}
 
export default AppPages;