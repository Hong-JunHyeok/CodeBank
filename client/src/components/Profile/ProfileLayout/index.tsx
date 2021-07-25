import { FC } from "react";
import { ProfileLayoutContainer } from "./styles";

const ProfileLayout: FC = ({ children }) => {
  return <ProfileLayoutContainer>{children}</ProfileLayoutContainer>;
};

export default ProfileLayout;
