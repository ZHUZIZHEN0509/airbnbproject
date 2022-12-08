import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 80px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  font-weight: 600;
  background-color: ${(props) =>
    props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
  border-bottom-color: ${(props) =>
    props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(233,233,233,1)"};
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }
`;
