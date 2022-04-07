import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 8px;
    z-index: 500;

    @media (min-width: 768px) {
        bottom: 48px;
        right: 40px;
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.25);
    cursor: pointer;

    :hover {
        background-color: ${(props) => props.theme.colors.tint};
    }
`;
