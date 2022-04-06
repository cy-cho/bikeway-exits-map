import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, Logo, Title, FullButtonWrapper } from "./style";
import { SearchButton } from "../Buttons/index";
import DropDown, { DropDownList, ListItem } from "../DropDown/index";
import SearchBar from "../SearchBar/index";
import logoIcon from "../../assets/logo.svg";
import TAIWAN_CITIES from "../../utils/taiwan_cities.json";

function LandingContent() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");
  const onSearch = () => {
    if (!selectedCity) {
      alert("尚未選擇尋找縣市");
      return;
    }
    // do something
    navigate("/search-bikes");
  };
  return (
    <Container>
      <Content>
        <Logo alt="logo" src={logoIcon} />
        <Title>{"尋找單車,\r\n來場悠閒的放鬆之旅!"}</Title>
        <SearchBar />
        <FullButtonWrapper>
          <DropDown title="縣市" select={selectedCity}>
            {TAIWAN_CITIES.map((item) => (
              <div key={item.area} style={{ width: "100%" }}>
                <DropDownList>{item.area}</DropDownList>
                {item.city.map((city) => (
                  <ListItem key={city} onClick={() => setSelectedCity(city)}>
                    {city}
                  </ListItem>
                ))}
              </div>
            ))}
          </DropDown>
          <SearchButton style={{ width: "100%" }} onClick={onSearch}>
            搜尋
          </SearchButton>
        </FullButtonWrapper>
      </Content>
    </Container>
  );
}

export default LandingContent;
