import CommentList from "../CommentList";
import { PostLayoutContainer } from "./styles";

const PostLayout = () => {
  return (
    <PostLayoutContainer>
      <header className="post-header">
        <h1 className="post-header-title">제목입니다.</h1>
        <div className="post-header-meta">
          <div className="post-header-meta-left">
            <span className="post-header-meta-left-nickname">닉네임</span>
            <span className="post-header-meta-left-createdAt">
              2021.07.23 23:35:01
            </span>
          </div>
          <div className="post-header-meta-right">
            <span className="post-header-meta-right-viewer">조회 99999</span>
            <span className="post-header-meta-right-like">추천 1232</span>
            <span className="post-header-meta-right-comment">댓글 132</span>
          </div>
        </div>
      </header>
      <div className="post-body">
        <div className="post-body-content">
          아무 글아무 글아무 글아무 글아무 글아무 글아무 글아무 글
        </div>
        <CommentList />
      </div>
    </PostLayoutContainer>
  );
};

export default PostLayout;
