import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  .btnBox {
    display: flex;
    color: ${(props) =>
      props.theme.isAlpha ? "#ffffff" : props.theme.text.primaryColor};
    div {
      padding: 12px;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background-color: ${(props) =>
          props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
      }
    }
  }

  .menuBox {
    display: flex;
    align-items: center;
    padding: 5px 5px 5px 12px;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.color.secondColor};
    border-radius: 21px;
    box-sizing: border-box;
    margin-left: 8px;
    color: ${(props) => props.theme.text.primaryColor};
    //混入样式
    ${(props) => props.theme.mixin.boxShadow}
    background-color: #ffffff;
    position: relative;
    .menuRight {
      margin-left: 12px;
    }
    .menuList {
      position: absolute;
      top: 50px;
      right: 20px;
      width: 240px;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.18);
      color: #666;
      div {
        margin: 5px 0;

        span {
          display: block;
          padding: 10px 0 10px 18px;
        }
        span:hover {
          background-color: #f5f5f5;
        }
      }

      .listTop {
        border-bottom: 1px solid #dddddd;
      }
    }
  }
`;
