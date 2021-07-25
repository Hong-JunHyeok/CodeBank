import Head from "next/head";
import AllFieldList from "../components/Field/AllFieldList";
import FieldsPageLayout from "../components/Field/FieldsPageLayout";
import HotFieldList from "../components/Field/HotFieldList";
import PageLayout from "../components/Page/PageLayout";

const Fields = () => {
  return (
    <>
      <Head>
        <title>코드뱅크 | 필드</title>
      </Head>
      <PageLayout>
        <FieldsPageLayout>
          <header className="fieldpage-header">
            <h1>
              자신만의 <strong>필드</strong>를 생성해서 지식을 공유해보세요.
            </h1>
            <button type="button">필드 생성하기</button>
          </header>
          <HotFieldList />
          <AllFieldList />
        </FieldsPageLayout>
      </PageLayout>
    </>
  );
};

export default Fields;
