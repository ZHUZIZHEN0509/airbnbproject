import styled from "styled-components";

export const RoomTabsWrapper = styled.div`
  .tabItem {
    /* flex-basis字体多拉伸 */
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    border: 0.5px solid #d8d8d8;
    border-radius: 3px;
    margin-right: 15px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    ${(props) => props.theme.mixin.boxShadow}
  }
  .activeItem {
    background: #00848a;
    color: #ffffff;
  }
`;
