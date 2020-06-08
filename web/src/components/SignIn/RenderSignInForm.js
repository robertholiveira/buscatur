import React from 'react';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { MdLockOpen } from 'react-icons/md';
import { AntInput, AntSwitch } from 'components/UI/Antd/AntdInputWithFormik';
import Button from 'components/UI/Antd/Button/Button';

import FormWrapper, {
  FieldWrapper,
  SwitchWrapper,
  Label,
} from './SiginFormStyle';

const RenderBasicInfoForm = props => {

  const { values, errors, submitCount, handleSubmit, forgetPasswordLink } = props;
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        { errors['submit'] &&
          <div className="error">
            <span>{errors['submit']}</span>
          </div>
        }
        <Field
          component={AntInput}
          name="email"
          type="email"
          size="large"
          placeholder="Seu e-mail"
          defaultValue={values.email}
          submitCount={submitCount}
          hasFeedback
        />
        <Field
          component={AntInput}
          name="password"
          type="password"
          size="large"
          placeholder="Sua senha"
          submitCount={submitCount}
          hasFeedback
        />
        <FieldWrapper className="field-container">
          <Link to={forgetPasswordLink}>Esqueceu sua senha?</Link>
        </FieldWrapper>

        <Button
          className="signin-btn"
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: '100%' }}
        >
          <MdLockOpen />
          Entrar
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default RenderBasicInfoForm;
