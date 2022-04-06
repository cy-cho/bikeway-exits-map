import styled from "styled-components";

export const Tag = styled.button`
    min-width: 72px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    padding: 4px 8px;
    border-radius: 4px;
`;

export const AvailableTag = styled(Tag)`
    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.tint};
    border: 1px solid ${(props) => props.theme.colors.dark};
`;

export const UnavailableTag = styled(Tag)`
    color: ${(props) => props.theme.colors.redDefault};
    background-color: ${(props) => props.theme.colors.redLight};
    border: 1px solid ${(props) => props.theme.colors.redDefault};
`;

export const SuspendTag = styled(Tag)`
    color: ${(props) => props.theme.colors.grey600};
    background-color: ${(props) => props.theme.colors.grey300};
    border: 1px solid ${(props) => props.theme.colors.grey600};
`;

export const FullTag = styled(Tag)`
    color: ${(props) => props.theme.colors.orangeDefault};
    background-color: ${(props) => props.theme.colors.orangeLight};
    border: 1px solid ${(props) => props.theme.colors.orangeDefault};
`;

export const CategoryTag = styled(Tag)`
    color: ${(props) => props.theme.colors.light};
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.light};
`;
