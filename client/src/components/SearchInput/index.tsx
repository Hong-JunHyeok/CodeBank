import { InputContainer } from "./styles";

const SearchInput = () => {
  return (
    <InputContainer>
      <input placeholder="코드뱅크 통합검색창 예) React.js" />
      <button type="submit" className="search-button">
        검색
      </button>
    </InputContainer>
  );
};

export default SearchInput;
