import List from "../../List";
import { HotFieldListContainer } from "./styles";

const HotFieldList = () => {
  return (
    <HotFieldListContainer>
      <header className="hot-header">
        <h1>
          <strong>HOT</strong> 유행하는 필드
        </h1>
      </header>
      <ul className="hot-list">
        <List
          items={[{}, {}, {}]}
          renderItems={(field, index) => {
            return (
              <li key={index} className="field-item">
                <div className="field-label">{index}</div>필드 {index}
              </li>
            );
          }}
        />
      </ul>
    </HotFieldListContainer>
  );
};

export default HotFieldList;
