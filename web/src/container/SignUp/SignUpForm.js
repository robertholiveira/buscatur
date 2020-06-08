import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import RenderSignUpForm from 'components/SignUp/RenderSignUpForm';
import { AuthContext } from 'context/AuthProvider';

const initialValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
  termsAndConditions: false,
  rememberMe: false,
};

const getRegisterValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'Muito pequeno.')
      .max(50, 'Muito grande.')
      .required('Nome é obrigatório.'),
    email: Yup.string()
      .email('E-mail inválido.')
      .required('E-mail é obrigatório.'),
    password: Yup.string()
      .min(6, 'Sua senha precisa ser maior que 6 caracteres.')
      .max(20, 'Muito grande, escolha uma senha menor.')
      .required('Sua senha é obrigatória.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Senhas não correspondem.')
      .required('Confirme sua senha, por favor.'),
    termsAndConditions: Yup.bool()
      .test(
        'consent',
        'Você precisa aceitar os Termos e Condições.',
        value => value === true
      )
      .required('Você precisa aceitar os termos e condições.'),
  });
};

export default () => {
  const { signUp, loggedIn, user} = useContext(AuthContext);
  if (loggedIn) return <Redirect to={{ pathname: '/' }} />;
  const handleSubmit = async (values, {setStatus, setErrors}) => {
    await signUp(values);
    if(!loggedIn){
      setErrors({
        email: 'Esse e-mail já está cadastrado.',
      });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={getRegisterValidationSchema}
      render={RenderSignUpForm}
    />
  );
};
