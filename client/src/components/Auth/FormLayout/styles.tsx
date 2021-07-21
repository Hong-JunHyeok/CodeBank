import styled from "@emotion/styled";

export const FormContainer = styled.div`
  width: 570px;
  padding: 100px 0;
  background-color: white;
  .form {
    &-header {
      margin-top: 10px;
      margin-bottom: 50px;
      border-bottom: 3px solid black;
      & > h1 {
        text-align: center;
        margin: 0 auto;
        width: 80%;
        font-size: 24px;
        padding: 20px;
      }
    }

    &-footer {
      text-align: center;
    }
  }
`;
