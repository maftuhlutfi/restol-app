import styled from "styled-components"
import Wrapper from "../../shared/Dropdown/Wrapper";

const SubHeader = styled.div`
    margin-top: 20px;
    margin-bottom: 25px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Wrapper} {
        margin-right: 20px;
    }
`

export default SubHeader;