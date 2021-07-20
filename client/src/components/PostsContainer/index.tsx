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
      <List
        items={posts}
        renderItems={(post, index) => {
          return <div key={index}>{post.title}</div>;
        }}
      />
    </StyledPostsContainer>
  );
};

export default PostsContainer;
