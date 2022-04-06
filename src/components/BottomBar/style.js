import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 8px 16px;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px -2px 6px rgba(38, 38, 38, 0.1);

    @media (min-width: 768px) {
        height: 56px;
    }
`;

export const PaginationWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    transform: rotate(${(props) => (props.type === "prev" ? 90 : -90)}deg);
    cursor: pointer;
`;

export const ShowMapButtonWrapper = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
`;
