import Image from "next/image";
import { FooterContainer } from "./styles";
import CodeBankLogo from "../../../../public/codebank_logo_white.png";

const PageFooter = () => {
  return (
    <FooterContainer>
      <div className="logo-container">
        <Image src={CodeBankLogo} width={100} height={100} placeholder="blur" />
      </div>
      <div className="copywrite-container">
        Copyright ⓒ 2021~ CodeBank. All rights reserved.
      </div>
    </FooterContainer>
  );
};

export default PageFooter;
