import styled from "@emotion/styled";

export const ProfileLayoutContainer = styled.div`
  padding: 30px 0;
  & > header {
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    & > h1 {
      font-size: 38px;
      font-weight: bold;
    }
  }
  .profile {
    padding: 20px 0;
    max-width: 800px;
    margin: 0 auto;
    h1 {
      font-size: 38px;
      font-weight: bold;
    }
    span {
      display: inline-block;
      margin-bottom: 20px;
    }
    input {
      width: 100%;
      padding: 10px 5px;
      border: none;
      border: 1px solid #ddd;
      background-color: #eee;
      outline: none;
      font-size: 18px;
    }
    button {
      margin-top: 20px;
      width: 100%;
      padding: 10px 5px;
      font-size: 18px;
      outline: none;
      border: none;
      cursor: pointer;
      background-color: #0540f2;
      color: white;
    }
    &-name {
    }
    &-email {
      margin-top: 60px;
    }
  }
`;
