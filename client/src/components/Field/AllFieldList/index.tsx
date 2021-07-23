import { useRouter } from "next/router";
import { useCallback } from "react";
import List from "../../List";
import { AllFieldListContainer } from "./styles";

const AllFieldList = () => {
  const router = useRouter();
  const handlePushField = useCallback((fieldId: number) => {
    router.push(`/field/${fieldId}`);
  }, []);

  return (
    <AllFieldListContainer>
      <header className="all-header">
        <h1>필드 전체보기</h1>
      </header>
      <ul className="all-list">
        <List
          items={[
            {
              id: 0,
              field_name: "웹",
            },
            {
              id: 1,
              field_name: "앱",
            },
            {
              id: 2,
              field_name: "윈도우",
            },
          ]}
          renderItems={(field) => {
            return (
              <li
                key={field.id}
                className="field-item"
                onClick={() => handlePushField(field.id)}
                onKeyDown={() => handlePushField(field.id)}
              >
                {field.field_name}
              </li>
            );
          }}
        />
      </ul>
    </AllFieldListContainer>
  );
};

export default AllFieldList;
