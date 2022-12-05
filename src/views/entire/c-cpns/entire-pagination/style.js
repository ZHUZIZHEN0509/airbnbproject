import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .paginationBox {
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    .paginationHeader {
      .Mui-selected {
        background-color: #222;
        color: #ffffff;
      }
      .Mui-selected:hover {
        text-decoration: underline;
      }
      .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
        margin: 0 6px;
      }
    }
    .paginationFooter {
      margin-top: 20px;
    }
  }
`;
