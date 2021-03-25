import { ReactSVG } from "react-svg";
import Card from "../../shared/Card";
import DescTitle from "../../shared/text/DescTitle";
import CategoryIcon from "./CategoryIcon";
import { useState } from "react";
import EditModal from "./EditModal";


const AddNewCategory = () => {
    const [input, setInput] = useState({
        name: '', 
        icon: ''
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
            icon: ''
        })
        setShow(false)
    }

    return (
        <>
            <Card width='120px' onClick={() => setShow(true)}>
                <CategoryIcon dashed>
                    <ReactSVG src={`./assets/icon/plus.svg`} />
                </CategoryIcon>
                <DescTitle color='#b5b5b5' mb='0'>
                    Add new
                </DescTitle>
            </Card>
            <EditModal 
                show={show}
                input={input}
                handleChange={handleChange}
                closeModal={closeModal}
            />
        </>
    );
}
 
export default AddNewCategory;