import styled from "@emotion/styled";

export const AllFieldListContainer = styled.div`
  margin-top: 100px;
  border: 1px solid black;
  .all-header {
    background-color: #f7f7f7;
    padding: 20px;
    & > h1 {
      display: inline;
      font-size: 15px;
      color: white;
      background-color: #0540f2;
      padding: 5px 10px;
      border-radius: 30px;
    }
  }

  .all-list {
    padding: 20px;
  }
  .field-item {
    padding: 20px 0;
    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
  }
`;
