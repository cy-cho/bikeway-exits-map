import { useRef } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Container, Content, Logo, Title, ButtonWrapper } from "./style";
import { SearchButton } from "../Buttons/index";
import DropDown from "../DropDown/index";
import SearchBar from "../SearchBar/index";
import logoIcon from "../../assets/logo.svg";
import TAIWAN_CITIES from "../../utils/taiwan_cities.json";

function LandingContent({ searchMode }) {
  const navigate = useNavigate();
  const cityRef = useRef();
  const onSearch = () => {
    const selectedCity = cityRef.current.getCity();
    if (!searchMode) {
      alert("尚未選擇尋找類型");
      return;
    }
    if (!selectedCity) {
      alert("尚未選擇尋找縣市");
      return;
    }
    // do something
    navigate("/map");
  };
  return (
    <Container>
      <Content>
        <Logo alt="logo" src={logoIcon} />
        <Title>{"尋找單車,\r\n來場悠閒的放鬆之旅!"}</Title>
        <SearchBar />
        <ButtonWrapper>
          <DropDown
            ref={cityRef}
            title="縣市"
            data={TAIWAN_CITIES}
            style={{ width: "100%" }}
          />
          <SearchButton style={{ width: "100%" }} onClick={onSearch}>
            搜尋
          </SearchButton>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}

LandingContent.propTypes = {
  searchMode: propTypes.string,
};

LandingContent.defaultProps = {
  searchMode: "",
};

export default LandingContent;
