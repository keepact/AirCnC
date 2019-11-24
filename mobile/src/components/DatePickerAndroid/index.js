import React, { useEffect } from 'react';

import { DatePickerAndroid, Keyboard } from 'react-native';

import { ButtonPicker, InputText } from './styles';

module.exports = ({ date, onDateChange, moment }) => {
  useEffect(() => {
    handleDatePicker();
  }, []);

  // eslint-disable-next-line consistent-return
  const handleDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
      });

      Keyboard.dismiss();

      if (action !== DatePickerAndroid.dismissedAction) {
        const pickedDate = new Date(year, month, day);

        onDateChange(moment(pickedDate).format('LL'));

        return pickedDate;
      }

      if (!date) {
        return onDateChange(moment().format('LL'));
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  return (
    <ButtonPicker onPress={() => handleDatePicker()}>
      <InputText>{date}</InputText>
    </ButtonPicker>
  );
};
