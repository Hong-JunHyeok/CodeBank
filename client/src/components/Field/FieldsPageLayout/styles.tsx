import styled from "@emotion/styled";

export const FieldsPageLayoutContainer = styled.div`
  padding: 50px 0;
  .fieldpage-header {
    display: flex;
    align-items: center;
    & > h1 {
      font-size: 24px;
      font-weight: bold;
      & > strong {
        color: #0540f2;
      }
    }
    & > button {
      margin-left: 10px;
      font-size: 18px;
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 20px;
      border: none;
      background-color: #78bf97;
      cursor: pointer;
    }
  }
`;
