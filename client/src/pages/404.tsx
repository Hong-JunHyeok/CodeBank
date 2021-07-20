import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Head from "next/head";

const NotFoundNotifyContainer = styled.div`
  h1 {
    margin-top: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  span {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .wrong-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
    list-style: disc;
  }
  .go-main {
    margin-top: 60px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    background-color: #0540f2;
    color: white;
  }
`;
const LogoCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  border: 16px solid #0540f2;
  margin: 10px;
`;

const NotFoundPage = () => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>코드뱅크 | 찾을수 없는 페이지</title>
      </Head>
      <NotFoundNotifyContainer>
        <h1>
          4<LogoCircle />4
        </h1>
        <span>잘못된 페이지 요청</span>
        <ul className="wrong-list">
          <li>올바른 URL인지 확인해주세요.</li>
          <li>요청하신 주소가 변경되었는지 확인해주세요.</li>
          <li>요청하신 페이지가 삭제되었는지 확인해주세요.</li>
        </ul>
        <button className="go-main" type="button" onClick={() => push("/")}>
          메인 화면으로 돌아가기
        </button>
      </NotFoundNotifyContainer>
    </>
  );
};

export default NotFoundPage;
