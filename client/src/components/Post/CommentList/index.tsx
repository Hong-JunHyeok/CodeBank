import List from "../../List";
import { CommentListContainer } from "./styles";

const CommentList = () => {
  return (
    <CommentListContainer>
      <header className="comment-header">
        <div className="comment-header-total">
          전체 댓글 <strong>2</strong>개
        </div>
      </header>
      <div className="comment-body">
        <List
          items={[
            {
              id: 1,
              comment: "ㅇㄱㄹㅇ... ㅋㅋ",
              author: "이형진",
              createdAt: "2021.07.23 23:35:01",
            },
            {
              id: 2,
              comment:
                "ㄹㅇ은 무슨ㄹㅇ은 무슨ㄹㅇ은 무슨ㄹㅇ은 무슨ㄹㅇ은 무슨ㄹㅇ은 무슨ㄹㅇ은 무슨ㄹㅇ은 무슨ㄹㅇ은 무슨ㄹㅇ은 무슨",
              author: "조민수",
              createdAt: "2021.07.23 23:35:01",
            },
          ]}
          renderItems={({ comment, id, author, createdAt }) => {
            return (
              <li className="comment-body-item" key={id}>
                <div className="comment-body-item-author">{author}</div>
                <div className="comment-body-item-comment">{comment}</div>
                <div className="comment-body-item-createdAt">{createdAt}</div>
              </li>
            );
          }}
        />
      </div>
    </CommentListContainer>
  );
};

export default CommentList;
