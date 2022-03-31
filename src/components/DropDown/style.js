import styled from "styled-components";

// dropdown container
export const DropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 4px 8px 16px;
  position: relative;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  curosr: pointer;
`;

export const DropDownHeader = styled.div`
  flex-grow: 1;
  text-align: center;
`;

export const DropDownIcon = styled.img`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

// dropdown list
export const DropDownListContainer = styled.div`
  position: absolute;
  top: 45px;
  left: 0 px;
  width: 186px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
`;

export const DropDownList = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  padding: 8px 24px;
`;
export const ListItem = styled.div`
  width: -webkit-fill-available;
  text-align: center;
  padding: 8px 24px;

  :hover {
    background-color: ${(props) => props.theme.colors.tint};
  }
`;
