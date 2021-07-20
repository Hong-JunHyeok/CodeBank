import { VFC } from "react";
import List from "../List";
import { StyledPostsContainer } from "./styles";

interface Props<T> {
  title: string;
  posts: Array<T>;
}

const PostsContainer: VFC<Props<any>> = ({ title, posts }) => {
  return (
    <StyledPostsContainer>
      <h1>{title}</h1>
      <div className="list">
        <List
          items={posts}
          renderItems={(post, index) => {
            return (
              <div key={index} className="post-item">
                <div className="post-item-thumnail">
                  <img src={post.thumnail} alt="썸네일" />
                </div>
                <div className="post-item-title">{post.title}</div>
              </div>
            );
          }}
        />
      </div>
    </StyledPostsContainer>
  );
};

export default PostsContainer;
