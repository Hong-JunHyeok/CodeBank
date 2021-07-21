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
    height: 60px;
    background-color: black;
    color: white;
    &-sections {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-contents {
        display: flex;
        & > li {
          & > a {
            text-decoration: none;
            color: white;
          }
          margin-right: 30px;
        }
      }
      &-user {
        display: flex;
        align-items: center;
        &-welcome {
          display: flex;
          margin-right: 10px;
          & > h1 {
            font-weight: bold;
          }
        }
      }
    }
  }
  .join {
    font-weight: lighter !important;
    margin-right: 20px !important;
    & > a {
      text-decoration: none;
      color: white;
    }
  }
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    background: #78bf97;
    color: black;
    font-size: 14px;
    padding: 5px;
    & > a {
      text-decoration: none;
      color: black;
    }
  }
  .logout {
    padding: 5px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
