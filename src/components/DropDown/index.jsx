import { useState } from "react";
import PropTypes from "prop-types";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownIcon,
  DropDownListContainer,
  // DropDownList,
  ListItem,
} from "./style";
import downIcon from "../../assets/dropdown/down.svg";

function DropDown({ title, data, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen(!isOpen);
  return (
    <DropDownContainer onClick={toggleDropDown}>
      <DropDownHeader>{title}</DropDownHeader>
      <DropDownIcon alt="arrow" src={downIcon} />
      {isOpen && (
        <DropDownListContainer>
          {data.map((item) => (
            <ListItem key={item.id} onClick={onSelect}>
              {item.value}
            </ListItem>
          ))}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

DropDown.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf,
  onSelect: PropTypes.func,
};

DropDown.defaultProps = {
  title: "選單",
  data: [],
  onSelect: () => {},
};

export default DropDown;
