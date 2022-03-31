import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavContainer, Logo, ButtonWrapper, Search } from "./style";
import logoIcon from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";

import { Button, SelectedButton } from "../Buttons/index";

function Nav() {
  const navigate = useNavigate();
  const [searchMode, setSearchMode] = useState("");
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
          <SelectedButton ml={16}>尋找車道</SelectedButton>
        ) : (
          <Button ml={16} onClick={() => setSearchMode("route")}>
            尋找車道
          </Button>
        )}
      </ButtonWrapper>
      <Search alt="search" src={searchIcon} />
    </NavContainer>
  );
}

export default Nav;
