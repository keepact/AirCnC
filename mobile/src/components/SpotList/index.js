import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

import loadingAnimation from '../../assets/animations/loading.json';
import Animation from '../Animation';

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
  AnimationContainer,
} from './styles';

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech },
      });
      setSpots(response.data);
      setLoading(false);
    }
    loadSpots();
  }, []);

  const spotsSize = useMemo(() => spots.length, [spots]);

  function handleNavigate(id) {
    navigation.navigate('Book', { id });
  }

  return (
    <Container>
      {loading ? (
        <AnimationContainer>
          <Animation animation={loadingAnimation} size={300} autoplay loop />
        </AnimationContainer>
      ) : (
        <>
          {tech && spotsSize > 0 ? (
            <Title>
              Empresas que usam <Bold>{tech}</Bold>
            </Title>
          ) : (
            <Title>
              Nenhuma empresa que usa <Bold>{tech}</Bold> foi encontrada
            </Title>
          )}
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
        </>
      )}
    </Container>
  );
}

SpotList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  tech: PropTypes.string.isRequired,
};

export default withNavigation(SpotList);
