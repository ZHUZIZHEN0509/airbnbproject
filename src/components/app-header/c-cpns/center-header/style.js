import styled from "styled-components";

export const CenterWrapper = styled.div`
  cursor: pointer;
  .searchBox {
    width: 300px;
    height: 48px;
    border-radius: 40px;
    border: 1px solid ${(props) => props.theme.color.secondColor};
    display: flex;
    align-items: center;
    padding: 0 10px 0 8px;
    box-sizing: border-box;
    /* transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    } */
    //混入样式
    ${(props) => props.theme.mixin.boxShadow}

    .searchText {
      flex: 1;
      padding: 0 16px;
      font-weight: 600;
    }

    .iconSearchBox {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: ${(props) => props.theme.color.primaryColor};
      color: #ffffff;
    }
  }
`;
