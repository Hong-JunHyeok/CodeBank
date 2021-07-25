import React from "react";
import PageLayout from "../../../components/Page/PageLayout";
import FieldPageLayout from "../../../components/Field/FieldPageLayout";
import PostLayout from "../../../components/Post/PostLayout";

const PostPage = () => {
  return (
    <PageLayout>
      <FieldPageLayout>
        <header>
          <h1>웹</h1>
        </header>
        <PostLayout />
      </FieldPageLayout>
    </PageLayout>
  );
};

export default PostPage;
