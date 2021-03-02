import { ReactSVG } from "react-svg";
import Card from "../../shared/Card";
import DescTitle from "../../shared/text/DescTitle";
import CategoryIcon from "./CategoryIcon";


const AddNewCategory = ({onClick}) => {
    return (
        <Card width='120px' onClick={onClick}>
            <CategoryIcon dashed>
                <ReactSVG src={`./assets/icon/plus.svg`} />
            </CategoryIcon>
            <DescTitle color='#b5b5b5' mb='0'>
                Add new
            </DescTitle>
        </Card>
    );
}
 
export default AddNewCategory;