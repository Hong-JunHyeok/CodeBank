import styled from "@emotion/styled";

export const PostLayoutContainer = styled.main`
  .post-header {
    padding: 20px 5px;
    border-bottom: 1px solid #eee;
    &-title {
      font-weight: bold;
      font-size: 24px;
    }
    &-meta {
      padding: 10px 0 0 0;
      display: flex;
      justify-content: space-between;
      &-left {
        &-nickname {
          padding-right: 10px;
          border-right: 1px solid gray;
        }
        &-createdAt {
          padding-left: 10px;
        }
      }
      &-right {
        & > span {
          padding-left: 10px;
          padding-right: 10px;
        }
        &-viewer {
          border-right: 1px solid gray;
        }
        &-like {
          border-right: 1px solid gray;
        }
      }
    }
  }

  .post-body {
    padding: 30px 0;
    &-content {
    }
    &-comment {
    }
  }
`;
