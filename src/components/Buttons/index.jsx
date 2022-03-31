import PropTypes from "prop-types";
import { Default, Selected, Search } from "./style";

export function Button({ children, onClick }) {
  return <Default onClick={onClick}>{children}</Default>;
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  children: "",
  onClick: () => {},
};

export function SelectedButton({ children, onClick }) {
  return <Selected onClick={onClick}>{children}</Selected>;
}

SelectedButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
SelectedButton.defaultProps = {
  children: "",
  onClick: () => {},
};

export function SearchButton({ children, onClick }) {
  return <Search onClick={onClick}>{children}</Search>;
}

SearchButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
SearchButton.defaultProps = {
  children: "",
  onClick: () => {},
};
