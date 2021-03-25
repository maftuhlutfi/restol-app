import { useState } from "react";
import { ReactSVG } from "react-svg";
import StyledButton from "../../shared/StyledButton";
import EditModal from "./EditModal";

const EditCategory = ({initData}) => {
    const [input, setInput] = useState({...initData, icon: ''})

    const [show, setShow] = useState(false)
    
    const handleChange = e => {
        const nameInput = e.target.name
        setInput(prev => ({
            ...prev,
            [nameInput]: e.target.value
        }))
    }

    const closeModal = () => {
        setInput({...initData, icon: ''})
        setShow(false)
    }

    return (
        <>
            <StyledButton size='sm' color='secondary' onClick={() => setShow(true)}>
                <ReactSVG src='./assets/icon/edit.svg' />
            </StyledButton>
            <EditModal 
                show={show} 
                input={input}
                closeModal={closeModal}
                handleChange={handleChange}
            />
        </>
    );
}
 
export default EditCategory;