import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'components/UI/Antd/Menu/Menu';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  PRIVACY_PAGE,
  PRICING_PLAN_PAGE,
  AGENT_PROFILE_PAGE,
} from 'settings/constant';

const FooterMenu = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <NavLink to={`${HOME_PAGE}`}>Viagens</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>Agências</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${PRICING_PLAN_PAGE}`}>Favoritas</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={`${PRIVACY_PAGE}`}>Política de privacidade</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to={`${AGENT_PROFILE_PAGE}`}>A BuscaTur</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default FooterMenu;
