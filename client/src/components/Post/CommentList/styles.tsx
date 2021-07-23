import styled from "@emotion/styled";

export const CommentListContainer = styled.div`
  margin-top: 100px;
  .comment-header {
    border-bottom: 3px solid #0540f2;
    padding: 20px 0;
    &-total {
      font-weight: bold;
      & > strong {
        color: red;
      }
    }
  }
  .comment-body {
    &-item {
      list-style: none;
      border-bottom: 1px solid #eee;
      padding: 15px 0;
      display: flex;
      &-author {
        flex: 1;
      }
      &-comment {
        flex: 7;
        padding: 0 20px;
      }
      &-createdAt {
        flex: 2;
      }
    }
  }
`;
