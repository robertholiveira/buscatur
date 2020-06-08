import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import Footers from 'components/Footer/Footer';
import LogoImage from 'assets/images/logo-alt.svg';
import FooterMenu from './FooterMenu';

const Footer = () => {
  return (
    <Footers
      logo={<Logo withLink linkTo="/" src={LogoImage} title="BucaTur." />}
      menu={<FooterMenu />}
      copyright={`BuscaTur. ${new Date().getFullYear()} - Todos os direitos reservados`}
    />
  );
};

export default Footer;
