import React, { useState } from 'react';
import moment from 'moment';
import Slider from 'components/UI/Antd/Slider/Slider';
import Button from 'components/UI/Antd/Button/Button';
import Drawer from 'components/UI/Antd/Drawer/Drawer';
import Checkbox from 'components/UI/Antd/Checkbox/Checkbox';
import Heading from 'components/UI/Heading/Heading';
import DateRangePicker from 'components/UI/DatePicker/ReactDates';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import { setStateToUrl, getStateFromUrl } from './url_handler';
import { IoIosArrowDown } from 'react-icons/io';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import {
  priceInit,
  calenderItem,
  getAmenities,
  getPropertyType,
} from './SearchParams';
import {
  FilterArea,
  FilterElementsWrapper,
  ButtonGroup,
  RoomGuestWrapper,
  ItemWrapper,
} from './MobileSearchView.style';

const FilterDrawer = ({ history, location }) => {
  const searchParams = getStateFromUrl(location);

  // state for drawer
  const [toggle, setToggle] = useState(false);

  // Amenities state
  const [destaques, setAmenities] = useState(searchParams.destaques || []);

  // Property type state
  const [tipo_quartoType, setPropertyType] = useState(searchParams.tipo_quarto || []);

  // Date state
  const [searchDate, setSearchDate] = useState(
    searchParams.date_range || {
      setStartDate: null,
      setEndDate: null,
    }
  );

  // Price state
  const [price, setPrice] = useState(
    searchParams.price || {
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    }
  );


  // Toggle Drawer
  const handleToggleDrawer = () => {
    setToggle(!toggle);
  };

  // Amenities data handling
  const onChangeAmenity = checkedAmenityValue => {
    setAmenities(checkedAmenityValue);
  };

  // PropertyType data handling
  const onChangeProperty = checkedPropertValue => {
    setPropertyType(checkedPropertValue);
  };

  // Price data handling
  const handlePriceChange = setValue => {
    const maxValue = setValue ? setValue[1] : price.defaultMin;
    const minValue = setValue ? setValue[0] : price.defaultMax;
    setPrice({
      min: minValue,
      max: maxValue,
      defaultMin: price.defaultMin,
      defaultMax: price.defaultMax,
    });
  };


  const handleApplyFilter = () => {
    const search = setStateToUrl({
      destaques: destaques,
      tipo_quarto: tipo_quartoType,
      price: [price.min, price.max]
    });
    history.push({
      pathname: '/listing',
      search: search,
    });
    setToggle(false);
  };

  const handleCloseDrawer = () => {
    setStateToUrl(null);
    setAmenities([]);
    setPropertyType([]);
    setSearchDate({
      setStartDate: null,
      setEndDate: null,
    });
    setPrice({
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    });
    setToggle(false);
  };

  return (
    <FilterArea>
      <Button className={toggle ? 'active' : ''} onClick={handleToggleDrawer}>
        More filters
      </Button>
      <Drawer
        className="filter_drawer"
        height="100vh"
        placement="bottom"
        closable={false}
        maskClosable={false}
        onClose={handleCloseDrawer}
        visible={toggle}
        maskStyle={{ backgroundColor: 'transparent' }}
      >
        <FilterElementsWrapper>
          <Accordion allowZeroExpanded={true}>
            {/* Start price range filter element */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Heading as="h4" content="Select Price Range" />
                  <IoIosArrowDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Slider
                  range
                  marks={priceInit}
                  min={price.defaultMin}
                  max={price.defaultMax}
                  value={[price.min, price.max]}
                  onChange={handlePriceChange}
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of price range filter element */}

            {/* Start destaques filter element */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Heading as="h4" content="Amenities" />
                  <IoIosArrowDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Checkbox.Group
                  options={getAmenities.options}
                  value={destaques}
                  onChange={onChangeAmenity}
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of destaques filter element */}

            {/* Start tipo_quarto type filter element */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Heading as="h4" content="Property Type" />
                  <IoIosArrowDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Checkbox.Group
                  options={getPropertyType.options}
                  value={tipo_quartoType}
                  onChange={onChangeProperty}
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of tipo_quarto type filter element */}

          </Accordion>

          <ButtonGroup>
            <Button onClick={handleCloseDrawer}>Cancel Filter</Button>
            <Button type="primary" onClick={handleApplyFilter}>
              Apply Filter
            </Button>
          </ButtonGroup>
        </FilterElementsWrapper>
      </Drawer>
    </FilterArea>
  );
};

export default FilterDrawer;
