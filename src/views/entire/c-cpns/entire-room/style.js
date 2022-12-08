import styled from "styled-components";

export const EntireRoomWrapper = styled.div`
  margin-top: 128px;
  padding: 30px 20px;
  position: relative;
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }
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
