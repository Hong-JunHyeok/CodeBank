import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  .search-container {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    align-items: center;
    height: 120px;
    form {
      padding-left: 20%;
    }
  }
  .navbar-container {
    display: flex;
    height: 60px;
    background-color: black;
    color: white;
    ul {
      height: 100%;
      margin: 0 auto;
      max-width: 1000px;
      display: flex;
      align-items: center;
    }
    &-contents li {
      margin-right: 40px;
      font-weight: bold;
      user-select: none;
      cursor: pointer;
    }
    &-user li {
      margin-right: 40px;
      font-weight: bold;
      user-select: none;
      cursor: pointer;
    }
  }
  .join {
    font-weight: lighter !important;
    margin-right: 20px !important;
  }
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40%;
    background: #78bf97;
    color: black;
  }
`;
