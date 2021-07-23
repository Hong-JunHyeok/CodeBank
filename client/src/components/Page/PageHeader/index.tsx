import router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderContainer } from "./styles";
import CodeBankLogo from "../../../../public/codebank_logo_standard.png";
import SearchForm from "../../SearchForm";
import { logOut } from "../../../modules/user/actions";

const PageHeader = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, name } = useSelector((state: any) => state.user);
  const handleClickLogo = useCallback(() => {
    router.push("/");
  }, []);

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <HeaderContainer>
      <div className="search-container">
        <Image
          src={CodeBankLogo}
          width={120}
          height={120}
          placeholder="blur"
          onClick={handleClickLogo}
          onKeyDown={handleClickLogo}
        />
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
            {isLoggedIn ? (
              <>
                <div className="navbar-container-sections-user-welcome">
                  <h1>{name}</h1>님, 환영합니다.
                </div>
                <div
                  className="logout"
                  onClick={handleLogOut}
                  onKeyPress={handleLogOut}
                >
                  로그아웃
                </div>
              </>
            ) : (
              <>
                <li className="join">
                  <Link href="/auth/join">회원가입</Link>
                </li>
                <li className="login">
                  <Link href="/auth/login">로그인</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default PageHeader;
