import React, { useState } from 'react';
import { Alert, AsyncStorage } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Label,
  Input,
  SubmitButton,
  CancelButton,
  ButtonText,
} from './styles';

export default function Book({ navigation }) {
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');

    await api.post(
      `/spots/${id}/bookings`,
      {
        date,
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
      <Label>Data de Interesse *</Label>
      <Input
        placeholder="Qual data você quer reservar?"
        value={date}
        onChangeText={setDate}
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
