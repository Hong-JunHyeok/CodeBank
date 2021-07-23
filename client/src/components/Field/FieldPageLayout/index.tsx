import { FC } from "react";
import { FieldPageLayoutContainer } from "./styles";

const FieldPageLayout: FC = ({ children }) => {
  return <FieldPageLayoutContainer>{children}</FieldPageLayoutContainer>;
};

export default FieldPageLayout;
