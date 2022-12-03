import styled from "styled-components";

export const LongforItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  flex-grow: 0;
  padding: 0 8px;
  box-sizing: border-box;
  .longforBox {
    position: relative;
    border-radius: 3px !important;
    overflow: hidden;
    .coverBox {
      position: absolute;
      width: 100%;
      height: 60%;
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
      bottom: 0;
    }
    .longforText {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translate(-50%, 0);
      color: #fff;
      text-align: center;

      .city {
        font-size: 18px;
        font-weight: 800;
      }
      .price {
        font-size: 14px;
        line-height: 20px;
      }
    }
    img {
      width: 100%;
      border-radius: 3px;
    }
  }
`;
