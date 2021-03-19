import Card from "../../shared/Card";

import styled from "styled-components"
import { ReactSVG } from "react-svg";
import { useState } from "react";
import EditModal from "./EditModal";

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

const AddNewProduct = () => {
    const options = ['Category', 'Makanan', 'Minuman']
    const [input, setInput] = useState({
        name: '', 
        category: options[0],
        price: '',
        discount: '',
        foto: ''
    })

    const [show, setShow] = useState(false)
    
    const handleChange = e => {
        const nameInput = e.target.name
        setInput(prev => ({
            ...prev,
            [nameInput]: e.target.value
        }))
    }

    const closeModal = () => {
        setInput({
            name: '', 
            category: options[0],
            price: '',
            discount: '',
            foto: ''
        })
        setShow(false)
    }

    return (
        <>
            <Card onClick={() => setShow(true)} padding='25px' width='100%'>
                <Icon>
                    <ReactSVG src='./assets/icon/plus.svg' />
                </Icon>
                <Text>
                    Add new
                </Text>
            </Card>
            <EditModal 
                show={show} 
                input={input}
                closeModal={closeModal}
                handleChange={handleChange}
                options={options}
            />
        </>
    );
}
 
export default AddNewProduct;