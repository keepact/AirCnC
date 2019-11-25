import React, { useState } from 'react';
import { Alert, AsyncStorage, Platform } from 'react-native';
import PropTypes from 'prop-types';

import * as Localization from 'expo-localization';
import moment from 'moment';
import 'moment/min/locales';

import Header from '../../components/Header';

import api from '../../services/api';

import {
  Container,
  Label,
  SubmitButton,
  CancelButton,
  ButtonText,
} from './styles';

const deviceLanguage = Localization.locale.replace(/_/g, '-').toLowerCase();

moment.locale([deviceLanguage, 'pt-br']);

const DatePicker =
  Platform.OS === 'ios'
    ? require('../../components/DatePickerIOS')
    : require('../../components/DatePickerAndroid');

function Book({ navigation }) {
  const [date, setDate] = useState(Platform.OS === 'ios' ? new Date() : '');
  const id = navigation.getParam('id');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');

    await api.post(
      `/spots/${id}/bookings`,
      {
        date: Platform.OS === 'ios' ? moment(date).format('LL') : date,
      },
      {
        headers: { user_id },
      }
    );

    Alert.alert('Solicitação de reserva enviada.');
    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <Container>
      <Header />
      <Label>Data de Interesse *</Label>
      <DatePicker
        date={date}
        onDateChange={setDate}
        locale={deviceLanguage}
        moment={moment}
      />
      <SubmitButton onPress={handleSubmit}>
        <ButtonText>Solicitar reserva</ButtonText>
      </SubmitButton>

      <CancelButton onPress={handleCancel}>
        <ButtonText>Cancelar</ButtonText>
      </CancelButton>
    </Container>
  );
}

Book.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Book;
