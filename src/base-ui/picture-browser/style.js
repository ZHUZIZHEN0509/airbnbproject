import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #333;
  display: flex;
  flex-direction: column;

  .browserHeader {
    height: 86px;
    position: relative;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  .browserCenter {
    flex: 1;
    display: flex;
    position: relative;
    .center-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 83px;
      height: 100%;
      cursor: pointer;
      color: #fff;
      position: absolute;
      z-index: 9;
    }
    .center-center {
      width: 100%;
      height: 100%;
      max-width: 105vh;
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
      }
      .pic-enter {
        transform: translateX(${(props) => (props.isNext ? "-100%" : "100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
    .center-left {
      left: 0;
    }
    .center-right {
      right: 0;
    }
  }
  .browserFooter {
    height: 100px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    .footerBox {
      max-width: 105vh;
      position: absolute;
      bottom: 10px;
      color: #fff;
      .footerHeader {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .headerRight {
          cursor: pointer;
        }
      }
      .footerList {
        margin-top: 3px;
        transition: height 300ms ease;
        height: ${(props) => (props.showList ? "67px" : "0px")};
        overflow: hidden;
        .pictureItem {
          width: 10%;
          margin-right: 15px;
          cursor: pointer;
          img {
            width: 100px;
            height: 67px;
            opacity: 0.5;
          }
          .activePicture {
            opacity: 1;
          }
        }
      }
    }
  }
`;
