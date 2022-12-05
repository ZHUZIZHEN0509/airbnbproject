import styled from "styled-components";

export const EntireRoomWrapper = styled.div`
  margin-top: 48px;
  padding: 30px 20px;
  position: relative;
  .roomListBox {
    display: flex;
    flex-wrap: wrap;
  }
  .roomListMask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
