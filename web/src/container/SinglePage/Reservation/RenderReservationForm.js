import React, { useState } from 'react';
import { AGENT_PROFILE_PAGE } from 'settings/constant';


import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
  RoomGuestWrapper,
  ItemWrapper,
} from './Reservation.style.js';

const RenderReservationForm = () => {
  // form state
  const [formState, setFormState] = useState({
    startDate: null,
    endDate: null,
    room: 0,
    guest: 0,
  });

  // handle room guest increment decrement
  const handleIncrement = type => {
    setFormState({
      ...formState,
      [type]: formState[type] + 1,
    });
  };

  const handleDecrement = type => {
    if (formState[type] <= 0) {
      return false;
    }
    setFormState({
      ...formState,
      [type]: formState[type] - 1,
    });
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;

    setFormState({
      ...formState,
      [type]: currentValue,
    });
  };

  // handle date data on update
  const updateSearchDataFunc = value => {
    setFormState({
      ...formState,
      startDate: value.setStartDate,
      endDate: value.setEndDate,
    });
  };

  // handleSubmit data
  const handleSubmit = e => {
    e.preventDefault();
    alert(
      `Ida: ${formState.startDate}\nEnd Date: ${formState.endDate}\nRooms: ${formState.room}\nGuests: ${formState.guest}`
    );
  };

  return (
    <ReservationFormWrapper className="form-container" onSubmit={handleSubmit}>
            
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
