import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    margin-top: 56px;

    @media (min-width: 768px) {
        margin-top: 80px;
    }
`;

export const ContentWrapper = styled.div`
    margin: 0 auto;
    min-height: calc(100vh - 56px);

    @media (min-width: 768px) {
        min-height: calc(100vh - 80px);
    }
`;

// background blocks
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

    @media (min-width: 1920px) {
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

    @media (min-width: 1920px) {
        bottom: -141px;
        left: -190px;
    }
`;

export const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
`;

// images
export const RidingBikeImgWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 24px;
    margin: 133.5px auto 0;

    @media (min-width: 768px) {
        column-gap: 52px;
        margin: 125px auto 0;
    }

    @media (min-width: 1920px) {
        margin: 125px auto 0;
    }
`;

export const RidingBikeImg = styled.img`
    width: 96px;
    height: 155px;

    @media (min-width: 768px) {
        width: 155px;
        height: 186px;
    }
`;
