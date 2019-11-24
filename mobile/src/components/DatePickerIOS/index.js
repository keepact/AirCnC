import React from 'react';
import { DatePickerIOS } from 'react-native';

module.exports = ({ date, onDateChange, moment }) => {
  return <DatePickerIOS date={date} onDateChange={onDateChange} />;
};
