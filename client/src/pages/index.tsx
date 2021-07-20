import Head from "next/head";
import PageLayout from "../components/PageLayout";
import PostsContainer from "../components/PostsContainer";
import Slider from "../components/Slider";

const MainPage = () => {
  return (
    <>
      <Head>
        <title>코드뱅크 | 개발을 공유하다.</title>
      </Head>

      <PageLayout>
        <Slider
          items={[
            {
              id: 1,
              imageSrc:
                "https://static-cse.canva.com/blob/268150/create-banners.jpg",
            },
            {
              id: 2,
              imageSrc:
                "http://printing24.co.kr/web/upload/category/shop1_69_top_757403.jpg",
            },
            {
              id: 3,
              imageSrc:
                "https://i.pinimg.com/originals/94/71/8a/94718a3e1bf3e152854f2dbf88ce31d7.jpg",
            },
          ]}
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

//* getServerSideProps로 BannerList와 PostList를 받아오기

export default MainPage;
