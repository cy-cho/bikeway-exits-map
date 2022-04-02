import { useState, forwardRef, useImperativeHandle } from "react";
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

const DropDown = forwardRef(({ title, data, onSelect }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const toggleDropDown = () => setIsOpen(!isOpen);

  useImperativeHandle(ref, () => ({
    getCity: () => {
      return selectedCity;
    },
  }));

  return (
    <DropDownContainer ref={ref} onClick={toggleDropDown}>
      <DropDownHeader>{selectedCity || title}</DropDownHeader>
      <DropDownIcon alt="arrow" rotate={isOpen ? -180 : 0} src={downIcon} />
      {isOpen && (
        <DropDownListContainer>
          {data.map((item) => (
            <div key={item.area} style={{ width: "100%" }}>
              <DropDownList onClick={onSelect}>{item.area}</DropDownList>
              {item.city.map((city) => (
                <ListItem key={city} onClick={() => setSelectedCity(city)}>
                  {city}
                </ListItem>
              ))}
            </div>
          ))}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
});

DropDown.displayName = "DropDown";
DropDown.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSelect: PropTypes.func,
};

DropDown.defaultProps = {
  title: "選單",
  data: [],
  onSelect: () => {},
};

export default DropDown;
