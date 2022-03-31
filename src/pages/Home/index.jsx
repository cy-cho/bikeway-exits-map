import { Container, WhiteWrapper, BlueWrapper, BackgroundImg } from "./style";
// import { Container } from "./style";
import bgWhite from "../../assets/home/bgWhite.svg";
import bgBlue from "../../assets/home/bgBlue.svg";

function Home() {
  return (
    <Container>
      <WhiteWrapper>
        <BackgroundImg alt="bg" src={bgWhite} />
      </WhiteWrapper>
      <BlueWrapper>
        <BackgroundImg alt="bg" src={bgBlue} />
      </BlueWrapper>
    </Container>
  );
}

export default Home;
