import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 56px);
    overflow: overlay;

    @media (min-width: 768px) {
        height: calc(100vh - 308px); /* nav: 80px, card: 228px */
    }
`;

export const Card = styled.div`
    min-height: 100px;
    margin: 12px 16px 0;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.grey100};
`;

export const CardHeader = styled.h5`
    color: ${(props) => props.theme.colors.black};
`;

export const CardAddressWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 12px 0 0 0;
`;

export const AddressIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const Address = styled.div`
    flex-grow: 1;
    margin: 0 0 0 4px;
    font-size: 14px;
    line-height: 150%;
    word-break: break-all;
    color: ${(props) => props.theme.colors.grey800};
`;

export const StatusWrapper = styled.div`
    display: flex;
    margin: 12px 0 0;
    column-gap: 12px;
`;
