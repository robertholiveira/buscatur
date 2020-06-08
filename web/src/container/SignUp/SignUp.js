import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/UI/Logo/Logo';
import SignUpForm from './SignUpForm';
import signUpImage from 'assets/images/login-page-bg.jpg';
import tripFinder from 'assets/images/logo-alt.svg';
import SignUpWrapper, {
  Title,
  TitleInfo,
  Text,
  SignUpFormWrapper,
  SignUpBannerWrapper,
} from './SignUp.style';

import { LOGIN_PAGE } from 'settings/constant';

export default function SignUp() {
  const [state, setState] = useState({
    facebookBtnLoading: false,
    githubBtnLoading: false,
    firebaseBtnLoading: false,
    googleBtnLoading: false,
  });


  return (
    <SignUpWrapper>
      <SignUpFormWrapper>
        <Logo withLink linkTo="/" src={tripFinder} title="BuscaTur." />

        <Title>Bem vindo ao BuscaTur.</Title>
        <TitleInfo>Crie uma conta com os seguintes dados:</TitleInfo>
        <SignUpForm />
        { /*
          <Divider>ou se cadastre com </Divider>
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
        */ }
  
        <Text style={{marginTop: '10px'}}>
          Já tem uma conta? <Link to={LOGIN_PAGE}>Fazer login</Link>
        </Text>
      </SignUpFormWrapper>

      <SignUpBannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signUpImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </SignUpBannerWrapper>
    </SignUpWrapper>
  );
}
