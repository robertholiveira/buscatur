import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import { FaWifi, FaBus, FaSwimmer, FaDrumstickBite, FaCoffee, FaUserCheck } from 'react-icons/fa';
import IconCard from 'components/IconCard/IconCard';
import AmenitiesWrapper, { AmenitiesArea } from './Amenities.style';
import { TextButton } from '../SinglePageView.style';
import { Element } from 'react-scroll';

const Amenities = ({ titleStyle, linkStyle, data}) => {
  return (
    <Element name="amenities" className="Amenities">
      <AmenitiesWrapper>
        <Heading as="h2" content="Destaques" {...titleStyle} />
        <AmenitiesArea>
          { data.have_wifi &&  <IconCard icon={<FaWifi />} title="Wifi" />}
          { data.have_breakfast &&  <IconCard icon={<FaCoffee />} title="Café da manhã" />}
          { data.have_lunch &&  <IconCard icon={<FaDrumstickBite />} title="Almoço" />}
          { data.have_dinner &&  <IconCard icon={<FaDrumstickBite />} title="Jantar" />}
          { data.have_pool &&  <IconCard icon={<FaSwimmer />} title="Piscina na hospedagem" />}
          { data.have_tours &&  <IconCard icon={<FaBus />} title="Tour pela cidade" />}
          { data.have_guide &&  <IconCard icon={<FaUserCheck />} title="Guia autorizado" />}
          { data.have_air &&  <IconCard icon={<FaUserCheck />} title="Ar condicionado" />}
        </AmenitiesArea>
      </AmenitiesWrapper>
    </Element>
  );
};

Amenities.propTypes = {
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

Amenities.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: ['14px', '20px', '30px'],
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489',
  },
};

export default Amenities;
