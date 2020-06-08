import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/UI/Logo/Logo';
import SignInForm from './SignInForm';
import { REGISTRATION_PAGE } from 'settings/constant';
import SignInWrapper, {
  Title,
  TitleInfo,
  Text,
  SignInFormWrapper,
  SignInBannerWrapper,
} from './SignIn.style';

import signInImage from 'assets/images/login-page-bg.jpg';
import tripFinder from 'assets/images/logo-alt.svg';

const SignIn = () => {

  return (
    <SignInWrapper>
      <SignInFormWrapper>
        <Logo withLink linkTo="/" src={tripFinder} title="BuscaTur." />
        <Title>Bem vindo de volta.</Title>
        <TitleInfo>Entre na sua conta</TitleInfo>
        <SignInForm />
        {/*
        <Divider>Or log in with </Divider>
        <Row gutter={16}>
          <Col span={12}>
            <Button
              loading={state.facebookBtnLoading}
              className="facebook-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={facebookAuthAction}
            >
              Facebook
            </Button>
          </Col>
          <Col span={12}>
            <Button
              loading={state.githubBtnLoading}
              className="github-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={githubAuthAction}
            >
              Github
            </Button>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: '37px' }}>
          <Col span={12}>
            <Button
              loading={state.firebaseBtnLoading}
              className="firebase-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={firebaseAuthAction}
            >
              Firebase
            </Button>
          </Col>
          <Col span={12}>
            <Button
              loading={state.googleBtnLoading}
              className="google-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={googleAuthAction}
            >
              Google+
            </Button>
          </Col>
        </Row>
        */}

        <Text style={{marginTop: '10px'}}>
          Não tem uma conta?{' '}
          <Link to={REGISTRATION_PAGE}>Cadastre-se</Link>
        </Text>
      </SignInFormWrapper>

      <SignInBannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signInImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </SignInBannerWrapper>
    </SignInWrapper>
  );
};

export default SignIn;
