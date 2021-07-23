import List from "../../List";
import { AllFieldListContainer } from "./styles";

const AllFieldList = () => {
  return (
    <AllFieldListContainer>
      <header className="all-header">
        <h1>필드 전체보기</h1>
      </header>
      <ul className="all-list">
        <List
          items={[{}, {}, {}]}
          renderItems={(field, index) => {
            return (
              <li key={index} className="field-item">
                필드 {index}
              </li>
            );
          }}
        />
      </ul>
    </AllFieldListContainer>
  );
};

export default AllFieldList;
