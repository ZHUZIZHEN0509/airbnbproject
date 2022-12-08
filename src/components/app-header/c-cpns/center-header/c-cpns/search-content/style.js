import styled from "styled-components";

export const SearchContentWrapper = styled.div`
  .searchContentBox {
    border-radius: 32px;
    width: 850px;
    height: 60px;
    border: 1px solid #ddd;
    background-color: #fff;
    display: flex;
    align-items: center;
    .contentItem {
      flex: 1;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 32px;
      height: 100%;
      &:hover {
        background-color: #eee;
      }
      span:nth-child(1) {
        font-size: ${(props) => props.theme.size.twoSize};
        color: ${(props) => props.theme.text.secondColor};
        font-weight: 800;
      }
      span:nth-child(2) {
        color: #666;
      }
    }
    .line {
      width: 1px;
      height: 32px;
      background-color: #ddd;
    }
  }
`;
