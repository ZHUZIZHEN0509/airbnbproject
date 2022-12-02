import styled from "styled-components";

export const RoomFooterWrapper = styled.div`
  display: flex;

  .footerBox {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.color};

    span {
      font-size: 17px;
      font-weight: 600;
      padding-right: 6px;
    }
    span:hover {
      text-decoration: underline;
    }
  }
`;
