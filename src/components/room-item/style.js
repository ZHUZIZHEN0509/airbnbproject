import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  padding: 8px 8px 12px;
  box-sizing: border-box;
  .roomImageBox {
    position: relative;
    padding-top: 66.66%;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: antiquewhite;
    cursor: pointer;
    .yesImage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .roomInfo {
    padding: 8px 0px 0px;
    .infoMessage {
      color: ${(props) => props.theme.text.threeColor};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${(props) => props.theme.size.twoSize};
      cursor: pointer;
    }
    .infoName {
      color: ${(props) => props.theme.text.primaryColor};
      font-size: ${(props) => props.theme.size.oneSize};
      font-weight: 800;
      margin-top: 4px;
      cursor: pointer;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .infoPrice {
      color: ${(props) => props.theme.text.primaryColor};
      margin: 5px 0 0 0;
    }
    .infoStar {
      color: ${(props) => props.theme.text.primaryColor};
      font-size: 12px;
      font-weight: 600;
      display: flex;
      align-items: center;
      margin-top: 5px;
      .atRate {
        display: flex;
        align-items: center;
        .ant-rate-star {
          font-size: 10px;
          color: #00848a;
          line-height: 0;
          margin-right: 1px;
          align-self: center;
        }
      }
      span {
        vertical-align: middle;
      }
      .reviews_count {
        margin: 0 0 0 2px;
        align-self: center;
      }
    }
  }
`;
