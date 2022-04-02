import propTypes from "prop-types";
import {
  Container,
  WhiteWrapper,
  BlueWrapper,
  BackgroundImg,
  ContentWrapper,
  RidingBikeImgWrapper,
  RidingBikeImg,
} from "./style";
import LandingContent from "../../components/LandingContent";

import bgWhite from "../../assets/home/bgWhite.svg";
import bgBlue from "../../assets/home/bgBlue.svg";
import riding02 from "../../assets/home/02.svg";
import riding01 from "../../assets/home/01.svg";
import riding03 from "../../assets/home/03.svg";

function Home({ searchMode }) {
  return (
    <Container>
      <WhiteWrapper>
        <BackgroundImg alt="bg" src={bgWhite} />
      </WhiteWrapper>
      <BlueWrapper>
        <BackgroundImg alt="bg" src={bgBlue} />
      </BlueWrapper>
      <ContentWrapper>
        <LandingContent searchMode={searchMode} />
        <RidingBikeImgWrapper>
          <RidingBikeImg alt="riding-bike" src={riding02} />
          <RidingBikeImg alt="riding-bike" src={riding01} />
          <RidingBikeImg alt="riding-bike" src={riding03} />
        </RidingBikeImgWrapper>
      </ContentWrapper>
    </Container>
  );
}

Home.propTypes = {
  searchMode: propTypes.string,
};

Home.defaultProps = {
  searchMode: "",
};

export default Home;
