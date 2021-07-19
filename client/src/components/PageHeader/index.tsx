import Image from "next/image";
import { HeaderContainer } from "./styles";
import CodeBankLogo from "../../../public/codebank_logo_standard.png";
import SearchInput from "../SearchInput";

const PageHeader = () => {
  return (
    <HeaderContainer>
      <div className="search-container">
        <Image src={CodeBankLogo} width={120} height={120} placeholder="blur" />
        <SearchInput />
      </div>
      <div className="navbar-container">
        <ul>
          {/* <li>리스트</li>
          <li>리스트</li>
          <li>리스트</li>
          <li>리스트</li> */}
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default PageHeader;
