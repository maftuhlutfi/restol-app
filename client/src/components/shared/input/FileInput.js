import { useState } from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"
import TextInput from "./TextInput"

const Input = styled(TextInput)`
    position: absolute;
    width: 1px;
    visibility: hidden;

    & + label {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        & > div {
            margin-right: 5px;

            path{fill: #FF617A;}
        }

        img {
            height: 80px;
        }
    }
`

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.image ? '100px' : '50px'};
    background: white;
    color: #FF617A;
    border: solid 1px #FF617A;
    border-radius: 5px;
    font-weight: 500;
`

const FileInput = ({label, onChange, ...props}) => {
    const [image, setImage] = useState('')

    const readFile = e => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <Wrapper image={image}>
            <Input onChange={readFile} id={props.name} {...props} />
            <label htmlFor={props.name}>
                {!image && <ReactSVG src='./assets/icon/upload.svg' />}
                {!image &&
                    (props.value.split('\\').pop().length > 23 ? props.value.split('\\').pop().slice(0, 20) + ' ...' :  props.value.split('\\').pop()
                    || 
                    label)
                }
                {image && <img src={image} />}
            </label>
        </Wrapper>
    );
}
 
export default FileInput;