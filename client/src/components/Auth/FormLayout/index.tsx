import { FC } from "react";
import { FormContainer } from "./styles";

interface Props {
  formTitle: string;
}

const FormLayout: FC<Props> = ({ formTitle, children }) => {
  return (
    <FormContainer className="form">
      <header className="form-header">
        <h1>{formTitle}</h1>
      </header>
      {children}
      <footer className="form-footer">
        Copyright ⓒ 2021~ CodeBank. All rights reserved.
      </footer>
    </FormContainer>
  );
};

export default FormLayout;
