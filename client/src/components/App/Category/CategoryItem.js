import { ReactSVG } from "react-svg";
import Card from "../../shared/Card";
import DescTitle from "../../shared/text/DescTitle";
import CategoryIcon from "./CategoryIcon";

import styled from "styled-components"
import { useState } from "react";
import StyledButton from "../../shared/StyledButton";
import EditModal from "./EditModal";
import ConfirmationModal from "../../shared/ConfirmationModal";

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    
    button {
        padding: 8px;
        margin: 0 3.5px;

        svg {
            width: 15px;
        }
    }
`

const Floated = styled.div`
    position:relative;
    ${props => !props.show && 'display: none;'}
`



const CategoryItem = ({index, active, title, icon, onClick, edit}) => {
    const [show, setShow] = useState(false)
    const initData = {icon, name: title}
    const [input, setInput] = useState({...initData, icon: ''})
    
    const handleChange = e => {
        const nameInput = e.target.name
        setInput(prev => ({
            ...prev,
            [nameInput]: e.target.value
        }))
    }
    
    const showModal = name => {
        setShow(name)
    }
    
    const closeModal = () => {
        setInput({...initData, icon: ''})
        setShow(false)
    }
    
    return (
            <Card width='120px' onClick={() => onClick(index)} bg={active === index ? '#FFDB6D' : '#fff'}>
                <CategoryIcon active={active === index ? 'true' : 'false'}>
                    <ReactSVG src={`./assets/icon/${icon}`} />
                </CategoryIcon>
                <DescTitle color={active === index ? '#5b5b5b' : '#b5b5b5'} mb='0'>
                    {title}
                </DescTitle>
                {edit && 
                    <Floated show={active === index}>
                        <ButtonGroup>
                            <StyledButton size='sm' color='secondary' onClick={() => showModal('edit')}>
                                <ReactSVG src='./assets/icon/edit.svg' />
                            </StyledButton>
                            <StyledButton size='sm' color='primary' onClick={() => setShow('delete')}>
                                <ReactSVG src='./assets/icon/delete.svg' />
                            </StyledButton>
                        </ButtonGroup>
                    </Floated>
                }
                <EditModal 
                    show={show == 'edit'} 
                    input={input}
                    closeModal={closeModal}
                    handleChange={handleChange}
                />
                <ConfirmationModal
                    title='Are you sure?'
                    body='Do you really want to delete these category? This process cannot be undone.'
                    show={show == 'delete'}
                    closeModal={closeModal}
                    confirm={() => console.log('Product deleted')}
                    icon='./assets/icon/delete-circle.svg'
                />
            </Card>
    );
}
 
export default CategoryItem;