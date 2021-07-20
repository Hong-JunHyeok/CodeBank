import Head from "next/head";
import List from "../components/List";
import PageLayout from "../components/PageLayout";
import PostsContainer from "../components/PostsContainer";

const MainPage = () => {
  return (
    <>
      <Head>
        <title>코드뱅크 | 개발을 공유하다.</title>
      </Head>
      <PageLayout>
        <List
          items={[
            {
              id: 1,
              title: "베너",
            },
            {
              id: 2,
              title: "베너1",
            },
            {
              id: 3,
              title: "베너2",
            },
          ]}
          renderItems={(item) => <div key={item.id}>{item.title}</div>}
        />
        <PostsContainer
          title="실시간 인기있는 게시글"
          posts={[
            {
              id: 1,
              title: "게시글",
            },
            {
              id: 2,
              title: "게시글1",
            },
            {
              id: 3,
              title: "게시글2",
            },
          ]}
        />
        <PostsContainer
          title="실시간 최근 게시글"
          posts={[
            {
              id: 1,
              title: "게시글",
            },
            {
              id: 2,
              title: "게시글1",
            },
            {
              id: 3,
              title: "게시글2",
            },
          ]}
        />
      </PageLayout>
    </>
  );
};

//* getServerSideProps로 BannerList와 PostList를 받아와서 Props로 전달할 것.

export default MainPage;
