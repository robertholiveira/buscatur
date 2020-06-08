import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import RenderSignInForm from 'components/SignIn/RenderSignInForm';
import * as Yup from 'yup';
import { AuthContext } from 'context/AuthProvider';
import { FORGET_PASSWORD_PAGE } from 'settings/constant';
const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const getLoginValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido.')
      .required('E-mail é obrigatório.'),
    password: Yup.string()
      .min(6, 'Sua senha deve possuir mais de 6 caracteres.')
      .max(20, 'Senha muito grande.')
      .required('Sua senha é obrigatório.'),
  });
};

export default () => {
  const { signIn, loggedIn } = useContext(AuthContext);
  if (loggedIn) return <Redirect to={{ pathname: '/' }} />;
  const handleSubmit = async (values, {setStatus, setErrors}) => {
    await signIn(values);
    if(!loggedIn){
      setErrors({
        submit: "E-mail ou senha incorretos."
      })
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={props => (
        <RenderSignInForm
          {...props}
          forgetPasswordLink={FORGET_PASSWORD_PAGE}
        />
      )}
      validationSchema={getLoginValidationSchema}
    />
  );
};
