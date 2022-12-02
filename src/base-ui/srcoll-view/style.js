import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  .scrollContainer {
    overflow: hidden;
    .tabsBox {
      display: flex;
    }
    .btn {
      width: 28px;
      height: 28px;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 1px solid #fff;
      box-shadow: rgb(0 0 0 / 14%) 0px 1px 1px 1px;
      cursor: pointer;
      background-color: #fff;
      z-index: 1;
    }
    .btnLeft {
      left: -14px;
    }
    .btnRight {
      right: -14px;
    }
  }
`;
