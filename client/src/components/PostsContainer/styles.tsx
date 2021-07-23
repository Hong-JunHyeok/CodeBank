import styled from "@emotion/styled";

export const StyledPostsContainer = styled.div`
  margin: 30px 0;
  h1 {
    font-size: 18px;
    padding: 10px;
    font-weight: bold;
    border-bottom: 4px solid #0540f2;
    margin-bottom: 10px;
    color: #0540f2;
  }
  .list {
  }
  .left {
    display: flex;
  }
  .right {
    display: flex;
  }
  .post-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    border-bottom: 1px solid #e4e4e4;
    height: 80px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &-thumnail {
      width: 80px;
      margin-right: 10px;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    &-title {
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    &-commentCount {
      display: flex;
      align-items: center;
      font-weight: bold;
      color: #0540f2;
      padding-left: 5px;
    }
    &-author {
      display: flex;
      align-items: center;
    }
    &-createat {
      font-size: 12px;
      padding-left: 20px;
      display: flex;
      align-items: center;
    }
  }
`;
