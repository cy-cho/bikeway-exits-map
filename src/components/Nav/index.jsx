import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    NavContainer,
    FirstRowWrapper,
    Logo,
    ButtonWrapper,
    Search,
    SecondRowWrapper,
    FullButtonWrapper,
} from "./style";
import logoIcon from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";

import { Button, SelectedButton, SearchButton } from "../Buttons/index";
import SearchBar from "../SearchBar/index";
import DropDown, { DropDownList, ListItem } from "../DropDown/index";
import TAIWAN_CITIES from "../../utils/taiwan_cities.json";

function Nav() {
    const [searchMode, setSearchMode] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isSearchingBike =
        searchMode === "bike" || pathname === "/search-bikes";
    const isSearchingRoute =
        searchMode === "route" || pathname === "/search-routes";
    const [openSearchBar, setOpenSearchBar] = useState(false);

    const onClickSearchBikes = () => {
        if (isSearchingBike) {
            return;
        }
        setSearchMode("bike");
        navigate("/search-bikes");
    };

    const onClickSearchRoutes = () => {
        if (isSearchingRoute) {
            return;
        }
        setSearchMode("route");
        navigate("/search-routes");
    };

    const onOpenSearchBar = () => {
        if (pathname === "/") {
            return;
        }
        setOpenSearchBar(!openSearchBar);
    };
    return (
        <NavContainer open={openSearchBar}>
            <FirstRowWrapper>
                <Logo alt="logo" src={logoIcon} onClick={() => navigate("/")} />
                <ButtonWrapper>
                    {isSearchingBike ? (
                        <SelectedButton>尋找單車</SelectedButton>
                    ) : (
                        <Button onClick={onClickSearchBikes}>尋找單車</Button>
                    )}
                    {isSearchingRoute ? (
                        <SelectedButton>尋找車道</SelectedButton>
                    ) : (
                        <Button onClick={onClickSearchRoutes}>尋找車道</Button>
                    )}
                </ButtonWrapper>
                <Search
                    alt="search"
                    src={searchIcon}
                    onClick={onOpenSearchBar}
                />
            </FirstRowWrapper>
            {openSearchBar && (
                <SecondRowWrapper>
                    <SearchBar />
                    <FullButtonWrapper>
                        <DropDown title="縣市" select={selectedCity.text}>
                            {TAIWAN_CITIES.map((item) => (
                                <div key={item.area} style={{ width: "100%" }}>
                                    <DropDownList>{item.area}</DropDownList>
                                    {item.city.map((city) => (
                                        <ListItem
                                            key={city.value}
                                            onClick={() =>
                                                setSelectedCity(city)
                                            }
                                        >
                                            {city.text}
                                        </ListItem>
                                    ))}
                                </div>
                            ))}
                        </DropDown>
                        <SearchButton style={{ width: "100%" }}>
                            搜尋
                        </SearchButton>
                    </FullButtonWrapper>
                </SecondRowWrapper>
            )}
        </NavContainer>
    );
}

export default Nav;
