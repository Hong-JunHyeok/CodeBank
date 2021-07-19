import React, { FC } from "react";
import PageFooter from "../PageFooter";
import PageHeader from "../PageHeader";
import { LayoutContainer } from "./styles";

const PageLayout: FC = ({ children }) => {
  return (
    <LayoutContainer>
      <PageHeader />
      <div className="page_content">{children}</div>
      <PageFooter />
    </LayoutContainer>
  );
};

export default PageLayout;
