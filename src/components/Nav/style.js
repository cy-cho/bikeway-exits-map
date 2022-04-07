import styled from "styled-components";

export const NavContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9999;
    padding: 8px 8px 8px 16px;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 2px 6px rgba(38, 38, 38, 0.1);
    transition: height 0.3s ease-in-out;
    height: ${(props) => (props.open ? 160 : 40)}px;

    @media (min-width: 768px) {
        padding: 4px 32px;
        height: 72px;
    }
`;

export const FirstRowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    height: 40px;
    width: auto;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 72px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    column-gap: 4px;

    @media (min-width: 768px) {
        justify-content: end;
        column-gap: 12px;
    }
`;

export const Search = styled.img`
    width: 24px;
    height: 24px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const SecondRowWrapper = styled.div`
    margin: 8px auto 0;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const FullButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
    margin-top: 12px;
`;
