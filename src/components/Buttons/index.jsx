import PropTypes from "prop-types";
import { Default, Selected, Search } from "./style";

export function Button({ children, onClick, style }) {
  return (
    <Default onClick={onClick} style={style}>
      {children}
    </Default>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
Button.defaultProps = {
  children: "",
  onClick: () => {},
  style: {},
};

export function SelectedButton({ children, onClick, style }) {
  return (
    <Selected onClick={onClick} style={style}>
      {children}
    </Selected>
  );
}

SelectedButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
SelectedButton.defaultProps = {
  children: "",
  onClick: () => {},
  style: {},
};

export function SearchButton({ children, onClick, style }) {
  return (
    <Search onClick={onClick} style={style}>
      {children}
    </Search>
  );
}

SearchButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
SearchButton.defaultProps = {
  children: "",
  onClick: () => {},
  style: {},
};
