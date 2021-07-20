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
  .post-item {
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid black;
    height: 80px;
    &-thumnail {
      width: 80px;
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
  }
`;
