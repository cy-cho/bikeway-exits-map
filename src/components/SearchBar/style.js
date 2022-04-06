import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 4px;
    color: ${(props) => props.theme.colors.grey700};
    background-color: ${(props) => props.theme.colors.grey100};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const Search = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 4px;
`;

export const Delete = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const Divider = styled.div`
    width: 1px;
    height: 24px;
    margin: 0 4px;
    background-color: ${(props) => props.theme.colors.grey300};
`;

export const InputBox = styled.input`
    flex-grow: 1;
    font-size: 16px;
    line-height: 150%;
    padding: 0;
    border: none;
    color: ${(props) => props.theme.colors.grey700};
    background-color: ${(props) => props.theme.colors.grey100};
    :focus {
        outline: none;
    }
`;
