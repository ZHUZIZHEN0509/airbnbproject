import styled from "styled-components";

export const CenterWrapper = styled.div`
  cursor: pointer;
  position: relative;
  .searchBox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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
  .tabsBox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    will-change: transform, opacity;
    .infoBox {
      position: absolute;
      top: 60px;
    }
  }
  /* 动画 */
  .tabs-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .tabs-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .tabs-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .tabs-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .search-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .search-enter-active {
    transition: all 250ms ease;
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }

  .search-exit {
    opacity: 0;
  }
`;
