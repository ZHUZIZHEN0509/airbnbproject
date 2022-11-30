import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 1px solid #ebebeb;
  .footerBox {
    padding: 72px 24px;
    max-width: 1080px;
    margin: 0 auto;
    .footerTop {
      display: flex;
      .topItem {
        flex: 1;
        h4 {
          padding-bottom: 16px;
          color: ${(props) => props.theme.text.primaryColor};
        }
        .questionText {
          margin-bottom: 4px;
          color: #747474;
        }
      }
    }
    .footerBottom {
      border-top: 1px solid #ebebeb;
      margin-top: 16px;
      .footerContent {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;

        color: ${(props) => props.theme.text.threeColor};
        .leftBox {
          display: flex;
          align-items: center;
          .logoBox {
            margin-right: 8px;
          }
          .textBox {
            a {
              color: #747474;
            }
          }
        }
        .rightBox {
          display: flex;
          align-items: center;
          .weixinlogo {
            padding-left: 12px;
          }
        }
      }
    }
  }
`;
