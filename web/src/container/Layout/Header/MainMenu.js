import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'components/UI/Antd/Menu/Menu';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
} from 'settings/constant';

const MainMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>Excursões</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${AGENT_PROFILE_PAGE}`}>Organizadores</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${PRICING_PLAN_PAGE}`}>Contato</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
