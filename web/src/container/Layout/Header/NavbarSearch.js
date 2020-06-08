import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import MapAutoComplete from 'components/Map/MapAutoComplete';
import { setStateToUrl, getStateFromUrl } from 'library/helpers/url_handler';
import { MapDataHelper } from 'components/Map/MapLocationBox';
import { LISTING_POSTS_PAGE } from 'settings/constant';
import { NavbarSearchWrapper } from './Header.style';
import Select from 'react-select'

const NavbarSearch = props => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  

  return (
    <NavbarSearchWrapper className="navbar_search">
      <Select 
      options={options}
      placeholder="Procure por um destino..."
      className='react-select-container' 
      classNamePrefix="react-select"
      />
    </NavbarSearchWrapper>
  );
};

export default withRouter(NavbarSearch);
