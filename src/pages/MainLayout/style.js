import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: calc(100vw - 8px); /* substract scrollbar width */
  overflow: hidden;
`;

export default Container;
