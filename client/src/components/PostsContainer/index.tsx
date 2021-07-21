import router from "next/router";
import { useCallback, VFC } from "react";
import List from "../List";
import { Post, Posts } from "../../types/post";
import { StyledPostsContainer } from "./styles";

interface Props {
  title: string;
  posts: Posts;
}

const PostsContainer: VFC<Props> = ({ title, posts }) => {
  const handleViewPost = useCallback((id: number) => {
    router.push(`/post/${id}`);
  }, []);

  return (
    <StyledPostsContainer>
      <h1>{title}</h1>
      <div className="list">
        <List
          items={posts}
          renderItems={(post: Post) => {
            return (
              <div
                key={post.id}
                className="post-item"
                onClick={() => handleViewPost(post.id)}
                onKeyDown={() => handleViewPost(post.id)}
              >
                <div className="left">
                  <div className="post-item-thumnail">
                    <img src={post.thumnail} alt="썸네일" />
                  </div>
                  <div className="post-item-title">{post.title}</div>
                  <div className="post-item-commentCount">
                    [{post.comments.length}]
                  </div>
                </div>
                <div className="right">
                  <div className="post-item-author">{post.author}</div>
                  <div className="post-item-createat">{post.createdAt}</div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </StyledPostsContainer>
  );
};

export default PostsContainer;
