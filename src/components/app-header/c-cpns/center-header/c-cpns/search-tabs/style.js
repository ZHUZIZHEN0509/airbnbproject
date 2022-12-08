import styled from "styled-components";

export const SearchTabsWrapper = styled.div`
  .titleBox {
    display: flex;
    .titleItem {
      color: ${(props) => (props.theme.isAlpha ? "#fff" : "#222")};
      width: 64px;
      height: 20px;
      margin: 10px 16px;
      font-size: 16px;
      font-weight: 400;
      box-sizing: border-box;
      > span {
        cursor: pointer;
        padding-bottom: 9px;

        box-sizing: border-box;
      }
      .activeTitle {
        border-bottom: 2px solid
          ${(props) => (props.theme.isAlpha ? "#fff" : "#222")};
      }
    }
  }
`;
