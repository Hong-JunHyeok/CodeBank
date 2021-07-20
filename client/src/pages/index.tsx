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
              title: "개발자라면 알아야할 100가지 기술들",
              thumnail:
                "https://blog.kakaocdn.net/dn/bRDjX7/btqCGRzmJGD/nLUJAaKmt9LTavEJatIM10/img.gif",
              createdAt: "2021-06-10",
              author: "홍준혁",
              comments: [{ id: 1 }, { id: 22 }, { id: 32 }, { id: 42 }],
            },
            {
              id: 2,
              title: "내가 어떻게 톰으로부터 살아남았나.",
              thumnail:
                "https://i1.daumcdn.net/thumb/C230x300/?fname=https://blog.kakaocdn.net/dn/dlIuQA/btqDp1Uj6Jq/CMYEGtDakNmQMQRZqJUnrk/img.gif",
              createdAt: "2021-06-10",
              author: "홍준혁",
              comments: [{ id: 1 }, { id: 22 }, { id: 32 }],
            },
            {
              id: 3,
              title: "게시글2",
              thumnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png",
              createdAt: "2021-06-10",
              author: "홍준혁",
              comments: [{ id: 1 }, { id: 22 }, { id: 32 }],
            },
          ]}
        />
        <PostsContainer
          title="실시간 최근 게시글"
          posts={[
            {
              id: 1,
              title: "게시글",
              thumnail:
                "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
              createdAt: "2021-06-10",
              author: "홍준혁",
              comments: [{ id: 1 }, { id: 22 }, { id: 32 }],
            },
            {
              id: 2,
              title: "게시글1",
              thumnail:
                "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
              createdAt: "2021-06-10",
              author: "홍준혁",
              comments: [{ id: 1 }, { id: 22 }, { id: 32 }],
            },
            {
              id: 3,
              title: "게시글2",
              thumnail:
                "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
              createdAt: "2021-06-10",
              author: "홍준혁",
              comments: [{ id: 1 }, { id: 22 }, { id: 32 }],
            },
          ]}
        />
      </PageLayout>
    </>
  );
};

//* getServerSideProps로 BannerList와 PostList를 받아오기

export default MainPage;
