import React from "react";
import PageLayout from "../../components/Page/PageLayout";
import FieldPageLayout from "../../components/Field/FieldPageLayout";
import PostsContainer from "../../components/PostsContainer";

const PostPage = () => {
  return (
    <PageLayout>
      <FieldPageLayout>
        <header>
          <h1>웹</h1>
          <section>
            <p>
              이 필드는 웹 개발하는 사람들이 서로 소통하는 필드입니다. 우리 서로
              최신 웹 정보들 공유해요~
            </p>
            <h2>홍준혁</h2>
          </section>
        </header>

        <PostsContainer
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
      </FieldPageLayout>
    </PageLayout>
  );
};

export default PostPage;
