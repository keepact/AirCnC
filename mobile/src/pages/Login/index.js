import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage, Platform, Image } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import {
  Container,
  Form,
  Label,
  Input,
  SubmitButton,
  ButtonText,
} from './styles';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('techs').then(tech => {
      if (tech) {
        setTechs(tech);
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('List');
      }
    });
  }, []);

  async function handleSubmit() {
    const response = await api.post('/sessions', {
      email,
    });

    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('techs', techs);

    navigation.navigate('List');
  }

  return (
    <Container enabled={Platform.OS == 'ios'}>
      <Image source={logo} />

      <Form>
        <Label>Seu Email *</Label>
        <Input
          placeholder="Seu email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Label>Tecnologias *</Label>
        <Input
          placeholder="Tecnologias de interesse"
          autoCapitalize="words"
          value={techs}
          onChangeText={setTechs}
        />

        <SubmitButton onPress={handleSubmit}>
          <ButtonText>Encontrar spots</ButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
