import styled from "@emotion/styled";

export const FieldPageLayoutContainer = styled.div`
  & > header {
    & > h1 {
      font-size: 40px;
      padding: 20px 0;
      color: #0540f2;
      border-bottom: 4px solid #0540f2;
      font-weight: bold;
      &::after {
        content: " 필드";
      }
    }
    & > section {
      padding: 20px 0;
      border-bottom: 3px solid #ddd;
      & > p {
        font-size: 18px;
        padding: 10px 0;
        &::before {
          content: "소개글 : ";
        }
      }
      & > h2 {
        text-align: end;
        font-weight: bold;
        &::before {
          font-weight: lighter;
          content: "창립자 : ";
        }
      }
    }
  }
`;
