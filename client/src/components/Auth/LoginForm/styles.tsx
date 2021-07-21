import styled from "@emotion/styled";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10%;
  .login-input {
    border: 1px solid black;
    outline: none;
    background-color: #fff;
    height: 50px;
    padding: 0 9px 0 9px;
    border: 1px solid #e5e5e5;
    margin-bottom: 30px;
    font-size: 15px;
    font-weight: bold;
  }
  .login-button {
    margin-top: 30px;
    width: 100%;
    height: 50px;
    padding: 1px 10px 0 10px;
    border: 1px solid #0540f2;
    background-color: #0540f2;
    color: white;
    cursor: pointer;
  }
  .login-goto_join {
    margin-top: 20px;
    text-align: center;
    & > a {
      font-weight: bold;
      text-decoration: none;
      color: #0078ff;
    }
  }
`;
