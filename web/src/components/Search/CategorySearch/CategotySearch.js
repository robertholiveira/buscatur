import React, { useState } from 'react';
import moment from 'moment';
import Button from 'components/UI/Antd/Button/Button';
import Slider from 'components/UI/Antd/Slider/Slider';
import Checkbox from 'components/UI/Antd/Checkbox/Checkbox';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import { setStateToUrl, getStateFromUrl } from '../url_handler';
import {
  priceInit,
  calenderItem,
  getAmenities,
  getPropertyType,
} from '../SearchParams';
import CategroySearchWrapper, {
  RoomGuestWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';

const CategotySearch = ({ history, location, filterTrips }) => {
  const searchParams = getStateFromUrl(location);
  const state = {
    destaques: searchParams.destaques || [],
    tipo_quarto: searchParams.tipo_quarto || [],
    date_range: searchParams.date_range || {
      setStartDate: null,
      setEndDate: null,
    },
    price: searchParams.price || {
      min: 0,
      max: 5000,
      defaultMin: 0,
      defaultMax: 5000,
    },
    location: searchParams.location || {
      lat: null,
      lng: null,
    }
  };
  const { destaques, tipo_quarto, price } = state;

  const onChange = async (value, type) => {
    const query = {
      ...state,
      [type]: value,
    };
    const search = setStateToUrl(query);
    await history.push({
      pathname: '/listing',
      search: search,
    });

    filterTrips();
  };


  const onSearchReset = () => {
    const search = setStateToUrl({ reset: '' });
    history.push({
      pathname: '/listing',
      search: search,
    });
  };

  return (
    <CategroySearchWrapper>
      <ViewWithPopup
        className={destaques.length ? 'activated' : ''}
        key={getAmenities.id}
        noView={true}
        view={
          <Button type="default">
            {getAmenities.name}
            {destaques.length > 0 && `: ${destaques.length}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getAmenities.options}
            defaultValue={destaques}
            onChange={value => onChange(value, 'destaques')}
          />
        }
      />

      <ViewWithPopup
        className={tipo_quarto.length ? 'activated' : ''}
        key={getPropertyType.id}
        noView={true}
        view={
          <Button type="default">
            {getPropertyType.name}
            {tipo_quarto.length > 0 && `: ${tipo_quarto.length}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getPropertyType.options}
            defaultValue={tipo_quarto}
            onChange={value => onChange(value, 'tipo_quarto')}
          />
        }
      />



      <ViewWithPopup
        className={
          price.min === price.defaultMin && price.max === price.defaultMax
            ? ''
            : 'activated'
        }
        key={300}
        noView={true}
        view={
          <Button type="default">
            {price.min > 0 || price.max < 5000
              ? `Preço: ${price.min}, ${price.max}`
              : `Preço`}
          </Button>
        }
        popup={
          <Slider
            range
            marks={priceInit}
            min={price.defaultMin}
            max={price.defaultMax}
            step={100}
            defaultValue={[price.min, price.max]}
            onAfterChange={value => onChange(value, 'price')}
          />
        }
      />
      
      <div className="view_with__popup">
        <div className="popup_handler">
          <Button type="default" onClick={onSearchReset}>
            Redefinir
          </Button>
        </div>
      </div>
    </CategroySearchWrapper>
  );
};

export default CategotySearch;
