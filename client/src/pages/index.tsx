import Head from "next/head";
import List from "../components/List";
import PageLayout from "../components/PageLayout";

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
              title: "안녕",
            },
            {
              id: 2,
              title: "안녕1",
            },
            {
              id: 3,
              title: "안녕2",
            },
          ]}
          renderItems={(item) => <div key={item.id}>{item.title}</div>}
        />
        {/* <PostList title="실시간 인기있는 게시글" />
        <PostList title="실시간 최긴 게시글" /> */}
      </PageLayout>
    </>
  );
};

//* getServerSideProps로 BannerList와 PostList를 받아와서 Props로 전달할 것.

export default MainPage;
