import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 56px);
    position: absolute;
    top: 56px;
    left: 0;
    z-index: 500;
    background-color: ${(props) => props.theme.colors.white};

    @media (min-width: 768px) {
        width: 380px;
        height: calc(100vh - 80px);
        top: 80px;
    }

    @media (min-width: 1920px) {
        width: 396px;
    }
`;

export const Icon = styled.div`
    width: 100px;
`;
