import React, { useMemo } from "react";
import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import { useSelector } from 'react-redux';
import { selectBookedDates } from '../../redux/bookingSlice';
import { selectData } from '../../redux/productSlice';

export default function TravelTrucksDatePicker({ name }) {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);

  
  const product = useSelector(selectData);

 
  const bookedDates = useSelector(state =>
    selectBookedDates(state, product.id)
  );

  const memoizedBookedDates = useMemo(() => [...bookedDates], [bookedDates]);

  return (
    <DatePicker
      minDate={tomorrow}
      excludeDates={memoizedBookedDates}
      placeholderText="Booking date*"
      calendarStartDay={1}
      {...field}
      selected={value}
      onChange={date => setValue(date)}
    />
  );
}

TravelTrucksDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
