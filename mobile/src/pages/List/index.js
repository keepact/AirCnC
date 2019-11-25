import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import socketio from 'socket.io-client';
import { Alert, ScrollView, AsyncStorage } from 'react-native';

import Header from '../../components/Header';

import { Container, Search, SearchInput, SearchButton } from './styles';

import SpotList from '../../components/SpotList';

function List() {
  const [newTech, setNewTech] = useState('');
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://192.168.0.17:3333', {
        query: { user_id },
      });

      socket.on('booking_response', booking => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? 'APROVADA' : 'REJEITADA'
          }`
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techsArray = storageTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  async function handleSearch() {
    const techChosen = newTech.split(',').map(t => t.trim());

    await AsyncStorage.setItem('techs', newTech);
    setTechs(techChosen);
    setNewTech('');
  }

  return (
    <Container>
      <Header />
      <Search>
        <SearchInput
          placeholder="Pesquise novas tecnologias"
          autoCapitalize="words"
          autoCorrect={false}
          value={newTech}
          onChangeText={setNewTech}
        />
        <SearchButton onPress={handleSearch}>
          <Ionicons name="md-search" size={22} color="#fff" />
        </SearchButton>
      </Search>
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </Container>
  );
}

export default List;
