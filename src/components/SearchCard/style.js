import styled from "styled-components";

export const Container = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
        width: 348px;
        margin: 12px 16px 16px;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.white};
        box-shadow: 0px 0px 10px rgba(38, 38, 38, 0.25);
        transition: max-height 0.3s ease-in-out;
        /* the max-height should be higher than expect */
        max-height: ${(props) => (props.show ? 500 : 112)}px;
    }

    @media (min-width: 1920px) {
        margin: 24px 24px 16px;
    }
`;

export const HeaderBlock = styled.div`
    height: 40px;
    border-radius: 8px 8px 0 0;
    background-color: ${(props) => props.theme.colors.primary};
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: baseline;
    padding: 16px 16px;
`;

export const ContentWrapper = styled.div`
    display: ${(props) => (props.show ? "block" : "none")};
    border-radius: 0 0 8px 8px;
    padding: 0 16px 20px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 16px;
    transform: rotate(${(props) => props.rotate}deg);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`;

export const FullButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
    margin-top: 12px;
`;
