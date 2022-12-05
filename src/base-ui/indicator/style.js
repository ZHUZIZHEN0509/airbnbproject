import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  /* 这里宽度可外部设置宽度一致 */
  overflow: hidden;
  .indicatorBox {
    position: relative;
    display: flex;
    transition: transform 200ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;
