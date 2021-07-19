import Link from "next/link";
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
        <div className="navbar-container-sections">
          <ul className="navbar-container-sections-contents">
            <li>
              <Link href="/fields">필드</Link>
            </li>
            <li>
              <Link href="/profile">내 프로필</Link>
            </li>
          </ul>
          <ul className="navbar-container-sections-user">
            <li className="join">회원가입</li>
            <li className="login">로그인</li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default PageHeader;
