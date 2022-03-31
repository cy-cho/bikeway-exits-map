import styled from "styled-components";

// basic default button style
const Button = styled.button`
  min-width: 88px;
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  border-radius: 4px;
  border: none;

  @media (min-width: 415px) {
    min-width: 96px;
    padding: 8px 16px;
  }
`;

export const Default = styled(Button)`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
`;

export const Selected = styled(Button)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Search = styled(Button)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;
