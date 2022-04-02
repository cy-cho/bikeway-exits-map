import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import { NavContainer, Logo, ButtonWrapper, Search } from "./style";
import logoIcon from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";

import { Button, SelectedButton } from "../Buttons/index";

function Nav({ searchMode, setSearchMode }) {
  const navigate = useNavigate();
  const isSearchingBike = searchMode === "bike";
  const isSearchingRoute = searchMode === "route";
  return (
    <NavContainer>
      <Logo alt="logo" src={logoIcon} onClick={() => navigate("/")} />
      <ButtonWrapper>
        {isSearchingBike ? (
          <SelectedButton>尋找單車</SelectedButton>
        ) : (
          <Button onClick={() => setSearchMode("bike")}>尋找單車</Button>
        )}
        {isSearchingRoute ? (
          <SelectedButton>尋找車道</SelectedButton>
        ) : (
          <Button onClick={() => setSearchMode("route")}>尋找車道</Button>
        )}
      </ButtonWrapper>
      <Search alt="search" src={searchIcon} />
    </NavContainer>
  );
}

Nav.propTypes = {
  searchMode: propTypes.string,
  setSearchMode: propTypes.func,
};

Nav.defaultProps = {
  searchMode: "",
  setSearchMode: () => {},
};

export default Nav;
