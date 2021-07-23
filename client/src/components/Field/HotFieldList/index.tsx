import { useRouter } from "next/router";
import { useCallback } from "react";
import List from "../../List";
import { HotFieldListContainer } from "./styles";

const HotFieldList = () => {
  const router = useRouter();
  const handlePushField = useCallback((fieldId: number) => {
    router.push(`/field/${fieldId}`);
  }, []);

  return (
    <HotFieldListContainer>
      <header className="hot-header">
        <h1>
          <strong>HOT</strong> 유행하는 필드
        </h1>
      </header>
      <ul className="hot-list">
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
          renderItems={(field, index) => {
            return (
              <li
                key={field.id}
                className="field-item"
                onClick={() => handlePushField(field.id)}
                onKeyDown={() => handlePushField(field.id)}
              >
                <div className="field-label">{index + 1}</div>
                <div className="field-name">{field.field_name}</div>
              </li>
            );
          }}
        />
      </ul>
    </HotFieldListContainer>
  );
};

export default HotFieldList;
