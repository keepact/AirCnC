import React from 'react';
import { DatePickerIOS } from 'react-native';
import PropTypes from 'prop-types';

function DatePicker({ date, onDateChange }) {
  return <DatePickerIOS date={date} mode="date" onDateChange={onDateChange} />;
}

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DatePicker;
