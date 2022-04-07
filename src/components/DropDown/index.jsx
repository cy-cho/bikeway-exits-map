import { useState } from "react";
import PropTypes from "prop-types";
import {
    DropDownContainer,
    DropDownHeader,
    DropDownIcon,
    DropDownListContainer,
    DropDownList,
    ListItem,
} from "./style";
import downIcon from "../../assets/dropdown/down.svg";

function DropDown({ title, select, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => setIsOpen(!isOpen);

    return (
        <DropDownContainer onClick={toggleDropDown}>
            <DropDownHeader>{select || title}</DropDownHeader>
            <DropDownIcon
                alt="arrow"
                rotate={isOpen ? -180 : 0}
                src={downIcon}
            />
            {isOpen && (
                <DropDownListContainer>{children}</DropDownListContainer>
            )}
        </DropDownContainer>
    );
}

DropDown.propTypes = {
    title: PropTypes.string,
    select: PropTypes.string,
    children: PropTypes.node.isRequired,
};

DropDown.defaultProps = {
    title: "選單",
    select: "",
};

export { DropDownList, ListItem };
export default DropDown;
