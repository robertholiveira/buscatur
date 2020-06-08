import React from 'react';
import { Formik } from 'formik';
import RenderForgetPassWordForm from 'components/ForgetPassWord/RenderForgetPassWordForm';
import * as Yup from 'yup';

const initialValues = {
  email: '',
};

const getForgetPassWordValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido.')
      .required('Seu e-mail é obrigatório.'),
  });
};

const handleSubmit = formProps => {
  const { email } = formProps;
  alert(`Um e-mail foi enviado para ${email} `);
};

export default () => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    render={RenderForgetPassWordForm}
    validationSchema={getForgetPassWordValidationSchema}
  />
);
