import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { DatePickerAndroid, Keyboard } from 'react-native';

import { ButtonPicker, InputText } from './styles';

function DatePicker({ date, onDateChange, moment }) {
  // eslint-disable-next-line consistent-return
  async function handleDatePicker() {
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
  }

  useEffect(() => {
    handleDatePicker();
  }, []);

  return (
    <ButtonPicker onPress={() => handleDatePicker()}>
      <InputText>{date}</InputText>
    </ButtonPicker>
  );
}

DatePicker.propTypes = {
  date: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
};

export default DatePicker;
