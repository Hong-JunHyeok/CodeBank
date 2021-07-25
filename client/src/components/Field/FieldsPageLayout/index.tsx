import { FC } from "react";
import { FieldsPageLayoutContainer } from "./styles";

const FieldsPageLayout: FC = ({ children }) => {
  return <FieldsPageLayoutContainer>{children}</FieldsPageLayoutContainer>;
};

export default FieldsPageLayout;
