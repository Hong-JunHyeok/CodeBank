import PageLayout from "../components/Page/PageLayout";
import { ProfileLayoutContainer } from "../components/Profile/ProfileLayout/styles";
import useInput from "../hooks/useInput";

const ProfilePage = () => {
  const [name, onChangeName] = useInput("내 닉네임");
  const [email, onChangeEmail] = useInput("내 이메일");

  return (
    <PageLayout>
      <ProfileLayoutContainer>
        <header>
          <h1>내 프로필</h1>
        </header>
        <main className="profile">
          <div className="profile-name">
            <h1>이름 변경</h1>
            <span>이름은 2 ~ 8자의 문자여야 합니다.</span>
            <input type="text" value={name} onChange={onChangeName} />
            <button type="button">이름 수정</button>
          </div>
          <div className="profile-email">
            <h1>이메일 변경</h1>
            <span>
              이메일이 변경되면 수신되는 알람이 변경된 이메일로 전송됩니다.
            </span>
            <input type="email" value={email} onChange={onChangeEmail} />
            <button type="button">이메일 수정</button>
          </div>
        </main>
      </ProfileLayoutContainer>
    </PageLayout>
  );
};

export default ProfilePage;
