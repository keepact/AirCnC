import React from 'react';
import { DatePickerIOS } from 'react-native';

module.exports = ({ date, onDateChange }) => {
  return <DatePickerIOS date={date} mode="date" onDateChange={onDateChange} />;
};
