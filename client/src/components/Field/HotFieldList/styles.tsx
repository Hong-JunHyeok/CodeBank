import styled from "@emotion/styled";

export const HotFieldListContainer = styled.div`
  margin-top: 20px;
  border: 1px solid black;
  .hot-header {
    background-color: #f7f7f7;
    padding: 20px;
    & > h1 {
      font-size: 22px;
      & > strong {
        color: #d24444;
      }
    }
  }

  .hot-list {
    padding: 20px;
  }
  .field-item {
    cursor: pointer;
    padding: 20px 0;
    &:hover .field-name {
      text-decoration-line: underline;
    }
    .field-name {
      display: inline;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
  }
  .field-label {
    margin-right: 20px;
    display: inline;
    padding: 10px;
    color: white;
    background-color: #9b66ff;
  }
`;
