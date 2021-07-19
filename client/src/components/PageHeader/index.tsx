import Image from "next/image";
import { HeaderContainer } from "./styles";
import CodeBankLogo from "../../../public/codebank_logo_standard.png";
import SearchForm from "../SearchForm";

const PageHeader = () => {
  return (
    <HeaderContainer>
      <div className="search-container">
        <Image src={CodeBankLogo} width={120} height={120} placeholder="blur" />
        <SearchForm />
      </div>
      <div className="navbar-container">
        <ul className="navbar-container-contents">
          <li>리스트</li>
          <li>리스트</li>
          <li>리스트</li>
          <li>리스트</li>
        </ul>
        <ul className="navbar-container-user">
          <li className="join">회원가입</li>
          <li className="login">로그인</li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default PageHeader;
