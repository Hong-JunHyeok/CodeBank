import React from "react";
import { useRouter } from "next/router";
import PageLayout from "../../components/Page/PageLayout";

const PostPage = () => {
  const router = useRouter();
  return <PageLayout>{router.query.id}</PageLayout>;
};

export default PostPage;
