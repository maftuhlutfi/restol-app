import { useState } from "react";
import { ReactSVG } from "react-svg";
import StyledButton from "../../shared/StyledButton";
import EditModal from "./EditModal";

const EditProduct = ({initData}) => {
    const options = ['Category', 'Makanan', 'Minuman']
    const [input, setInput] = useState({...initData, foto: ''})

    const [show, setShow] = useState(false)
    
    const handleChange = e => {
        const nameInput = e.target.name
        setInput(prev => ({
            ...prev,
            [nameInput]: e.target.value
        }))
    }

    const closeModal = () => {
        setInput({...initData, foto: ''})
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
                options={options}
            />
        </>
    );
}
 
export default EditProduct;