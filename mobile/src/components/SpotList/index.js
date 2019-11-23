import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';

import api from '../../services/api';

import {
  Container,
  Title,
  Bold,
  List,
  ListItem,
  Thumbnail,
  Company,
  Price,
  SubmitButton,
  ButtonText,
} from './styles';

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech },
      });
      setSpots(response.data);
    }
    loadSpots();
  }, []);

  function handleNavigate(id) {
    navigation.navigate('Book', { id });
  }

  return (
    <Container>
      <Title>
        Empresas que usam <Bold>{tech}</Bold>
      </Title>
      <List
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem>
            <Thumbnail source={{ uri: item.thumbnail_url }} />
            <Company>{item.company}</Company>
            <Price>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}</Price>
            <SubmitButton onPress={() => handleNavigate(item._id)}>
              <ButtonText>Solicitar reserva</ButtonText>
            </SubmitButton>
          </ListItem>
        )}
      />
    </Container>
  );
}

export default withNavigation(SpotList);
