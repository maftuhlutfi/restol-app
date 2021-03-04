import Card from "../../shared/Card";

import styled from "styled-components"
import { ReactSVG } from "react-svg";

const Icon = styled.div`
    background-color: white;
    border-radius: 10px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: dashed 2px #e5e5e5;
    margin-bottom: 10px;

    svg {
        width: 60px;

        path {
            fill: ${props => props.active === 'true' ? '#262626' : '#B5B5B5'};
        }
    }
`

const Text = styled.span`
    font-size: 18px;
    margin-top: 10px;
    color: #b5b5b5;
    text-align: center;
`

const AddNewProduct = ({onClick}) => {
    return (
        <Card padding='25px' width='100%'>
            <Icon>
                <ReactSVG src='./assets/icon/plus.svg' />
            </Icon>
            <Text>
                Add new
            </Text>
        </Card>
    );
}
 
export default AddNewProduct;