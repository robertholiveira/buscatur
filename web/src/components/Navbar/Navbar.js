import React from 'react';
import PropTypes from 'prop-types';
import ProfileMenu from './ProfileMenu'
import NavbarWrapper, {
  LogoArea,
  MenuArea,
  AvatarWrapper,
  AuthWrapper,
  MenuWrapper,
} from './Navbar.style';

const Navbar = ({
  className,
  logo,
  navMenu,
  authMenu,
  isLogin,
  headerType,
  searchComponent,
  location,
  searchVisibility,
  userName
}) => {
  // Add all classs to an array
  const addAllClasses = ['navbar'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // headerType prop checking
  if (headerType) {
    addAllClasses.push(`is_${headerType}`);
  }

  return (
    <NavbarWrapper className={addAllClasses.join(' ')}>
      {logo || searchVisibility ? (
        <LogoArea>
          {logo}
          {!searchVisibility && location.pathname === '/'
            ? null
            : searchComponent}
        </LogoArea>
      ) : null}
      <MenuArea>
        {navMenu && <MenuWrapper className="main_menu">{navMenu}</MenuWrapper>}
        {isLogin ? (
          <div>
            <AvatarWrapper>
              <ProfileMenu name={userName} />
            </AvatarWrapper>
          </div>
        ) : (
          authMenu && (
            <AuthWrapper className="auth_menu">{authMenu}</AuthWrapper>
          )
        )}
      </MenuArea>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  navMenu: PropTypes.element,
  avatar: PropTypes.element,
  authMenu: PropTypes.element,
  isLogin: PropTypes.bool,
  userName: PropTypes.string,
  headerType: PropTypes.oneOf(['transparent', 'default']),
};

export default Navbar;
