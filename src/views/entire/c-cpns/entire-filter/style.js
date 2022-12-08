import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 80px;
  z-index: 1;
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 48px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #ffffff;
  .filterItem {
    padding: 6px 12px;
    border: 1px solid rgb(220, 224, 224);
    border-radius: 4px;
    cursor: pointer;
    margin: 0 4px 0 8px;
    color: ${(props) => props.theme.text.primaryColor};
  }
  .activeFilterItem {
    background-color: ${(props) => props.theme.bgColor.primaryColor};
    color: #ffffff;
  }
`;
