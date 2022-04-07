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

export const Pagination = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 700;
    line-hegiht: 150%;
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.grey500};
    color: ${(props) => props.theme.colors.grey500};
    background-color: ${(props) => props.theme.colors.grey100};
    white-space: pre-line;
`;

export const CurrentPage = styled.div`
    color: ${(props) => props.theme.colors.black};
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
