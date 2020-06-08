import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import ForgetPassWordForm from './ForgetPassWordForm';
import ForgerPassWordImage from 'assets/images/login-page-bg.jpg';
import tripFinder from 'assets/images/logo-alt.svg';
import ForgetPassWordWrapper, {
  Title,
  TitleInfo,
  ForgetPassWordFormWrapper,
  ForgetPassWordBannerWrapper,
} from './ForgetPassWord.style';

export default function ForgetPassWord() {
  return (
    <ForgetPassWordWrapper>
      <ForgetPassWordFormWrapper>
        <Logo withLink linkTo="/" src={tripFinder} title="TripFinder." />
        <Title>Bem vindo de volta</Title>
        <TitleInfo>Digite seu e-mail para recuperar sua conta.</TitleInfo>
        <ForgetPassWordForm />
      </ForgetPassWordFormWrapper>
      <ForgetPassWordBannerWrapper>
        <div
          style={{
            backgroundImage: `url(${ForgerPassWordImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </ForgetPassWordBannerWrapper>
    </ForgetPassWordWrapper>
  );
}
