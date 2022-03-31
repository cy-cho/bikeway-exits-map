import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 56px;
  height: calc(100vh - 56px);

  @media (min-width: 768px) {
    margin-top: 80px;
    height: calc(100vh - 80px);
  }
`;

export const BackgroundImgWrapper = styled.div`
  width: auto;
  height: auto;
  position: absolute;
`;

export const WhiteWrapper = styled(BackgroundImgWrapper)`
  top: -120px;
  right: -352px;

  @media (min-width: 768px) {
    top: -217px;
  }

  @media (min-width: 1440px) {
    top: -193px;
    right: -240px;
  }
`;

export const BlueWrapper = styled(BackgroundImgWrapper)`
  display: none;

  @media (min-width: 768px) {
    display: block;
    bottom: -208px;
    left: -277px;
  }

  @media (min-width: 1440px) {
    bottom: -141px;
    left: -190px;
  }
`;
export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
`;
