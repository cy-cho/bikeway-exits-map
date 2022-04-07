import PropTypes from "prop-types";
import { useState } from "react";
import {
    Container,
    HeaderBlock,
    ContentWrapper,
    HeaderWrapper,
    Icon,
    FullButtonWrapper,
} from "./style";
import SearchBar from "../SearchBar/index";
import DropDown, { DropDownList, ListItem } from "../DropDown/index";
import { SearchButton } from "../Buttons/index";
import TAIWAN_CITIES from "../../utils/taiwan_cities.json";
import downIcon from "../../assets/dropdown/down.svg";

function SearchCard({
    setOpenSelection,
    selectedCity,
    setSelectedCity,
    refetch,
}) {
    // const [selectedCity, setSelectedCity] = useState("");
    const [openSearchDetail, setOpenSearchDetail] = useState(true);

    return (
        <Container show={openSearchDetail}>
            <HeaderBlock />
            <HeaderWrapper>
                <h2>尋找單車</h2>
                <Icon
                    alt="folder"
                    rotate={openSearchDetail ? -180 : -0}
                    src={downIcon}
                    onClick={() => setOpenSearchDetail(!openSearchDetail)}
                />
            </HeaderWrapper>
            <ContentWrapper show={openSearchDetail}>
                <SearchBar />
                <FullButtonWrapper>
                    <DropDown title="縣市" select={selectedCity.text}>
                        {TAIWAN_CITIES.map((item) => (
                            <div key={item.area} style={{ width: "100%" }}>
                                <DropDownList>{item.area}</DropDownList>
                                {item.city.map((city) => (
                                    <ListItem
                                        key={city.value}
                                        onClick={() => setSelectedCity(city)}
                                    >
                                        {city.text}
                                    </ListItem>
                                ))}
                            </div>
                        ))}
                    </DropDown>
                    <SearchButton
                        style={{ width: "100%" }}
                        onClick={() => {
                            setOpenSelection(true);
                            refetch();
                        }}
                    >
                        搜尋
                    </SearchButton>
                </FullButtonWrapper>
            </ContentWrapper>
        </Container>
    );
}

SearchCard.propTypes = {
    setOpenSelection: PropTypes.func.isRequired,
    selectedCity: PropTypes.oneOf([PropTypes.object]).isRequired,
    setSelectedCity: PropTypes.func.isRequired,
    refetch: PropTypes.func.isRequired,
};

export default SearchCard;
