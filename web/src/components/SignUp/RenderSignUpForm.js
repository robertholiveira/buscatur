import React from 'react';
import { Field, Form } from 'formik';
import { MdLockOpen } from 'react-icons/md';
import { AntInput, AntSwitch } from 'components/UI/Antd/AntdInputWithFormik';
import Button from 'components/UI/Antd/Button/Button';

import FormWrapper, {
  FieldWrapper,
  SwitchWrapper,
  Label,
} from './SignUpFormStyle';

const RenderSignUpForm = props => {
  const { values, submitCount, handleSubmit } = props;
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Field
          component={AntInput}
          name="name"
          type="text"
          size="large"
          placeholder="Seu nome"
          submitCount={submitCount}
          value={values.name}
          hasFeedback
        />
        <Field
          component={AntInput}
          name="email"
          type="text"
          size="large"
          placeholder="E-mail"
          submitCount={submitCount}
          value={values.email}
          hasFeedback
        />
        <Field
          component={AntInput}
          name="password"
          type="password"
          size="large"
          placeholder="Senha"
          submitCount={submitCount}
          value={values.password}
          hasFeedback
        />
        <Field
          component={AntInput}
          name="confirmPassword"
          type="password"
          size="large"
          placeholder="Confirmar senha"
          submitCount={submitCount}
          value={values.confirmPassword}
          hasFeedback
        />
        <FieldWrapper className="field-container">
          <SwitchWrapper className="termsAndConditions">
            <Field
              component={AntSwitch}
              name="termsAndConditions"
              submitCount={submitCount}
              value={values.termsAndConditions}
            />
            <Label>Eu concordo com os Termos e Condições</Label>
          </SwitchWrapper>
        </FieldWrapper>

        <Button
          className="signin-btn"
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: '100%' }}
        >
          <MdLockOpen />
          Cadastrar
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default RenderSignUpForm;
