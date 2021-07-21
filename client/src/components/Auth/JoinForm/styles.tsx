import styled from "@emotion/styled";

export const JoinFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10%;
  .join {
    &-section {
      & > h1 {
        font-weight: bold;
        margin-bottom: 10px;
        &::after {
          content: "·";
          color: red;
          font-size: 24px;
        }
      }
    }
    &-input {
      border: 1px solid black;
      outline: none;
      background-color: #fff;
      height: 50px;
      padding: 0 9px 0 9px;
      border: 1px solid #e5e5e5;
      margin-bottom: 30px;
      font-size: 15px;
      font-weight: bold;
      width: 100%;
    }
    &-button {
      margin-top: 30px;
      width: 100%;
      height: 50px;
      padding: 1px 10px 0 10px;
      border: 1px solid #0540f2;
      background-color: #0540f2;
      color: white;
      cursor: pointer;
    }
    &-goto_join {
      margin-top: 20px;
      text-align: center;
      & > a {
        font-weight: bold;
        text-decoration: none;
        color: #0078ff;
      }
    }
  }
  .conditions {
    display: flex;
    flex-direction: column;
  }
`;
