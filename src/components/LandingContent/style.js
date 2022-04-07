import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    margin: 0 16px;
    padding-top: 24px;

    @media (min-width: 768px) {
        margin: 0 auto;
        padding-top: 80px;

        display: grid;
        justify-content: center;
        grid-template-columns: repeat(8, 78px);
        grid-column-gap: 16px;
    }

    @media (min-width: 1920px) {
        grid-template-columns: repeat(12, 86px);
        grid-column-gap: 24px;
    }
`;

export const Content = styled.div`
    @media (min-width: 768px) {
        grid-column-start: 3;
        grid-column-end: 7;
    }

    @media (min-width: 1920px) {
        grid-column-start: 1;
        grid-column-end: 5.5;
    }
`;

export const Logo = styled.img`
    width: 240px;

    @media (min-width: 768px) {
        width: 320px;
    }
`;

export const Title = styled.h2`
    margin: 24px 0 40px;
    white-space: pre-wrap;
`;

export const FullButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
    margin-top: 12px;
`;
