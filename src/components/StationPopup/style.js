import styled from "styled-components";

export const Container = styled.div`
    padding: 12px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    border: 1px solid $ ${(props) => props.theme.colors.primary};
    box-shadow: 0px 0px 10px rgba(38, 38, 38, 0.25);

    @media (min-width: 768px) {
        padding: 16px 12px;
    }
`;

export const AmountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
`;

export const AmountCard = styled.div`
    border-radius: 4px;
    border: 1px solid $ ${(props) => props.theme.colors.primary};
`;
