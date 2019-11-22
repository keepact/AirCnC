import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { Alert, ScrollView, AsyncStorage } from 'react-native';

import { Container, Logo, HomeButton } from './styles';

import SpotList from '../../components/SpotList';

import logo from '../../assets/logo.png';

export default function List({ navigation }) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.0.17:3333', {
                query: { user_id }
            })

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
            })
        })

    }, []);

    // [ReactJs, [Node.js]

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

    return (
        <Container>
            <HomeButton onPress={() => navigation.navigate('Login')}>
                <Logo source={logo} />
            </HomeButton>
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </Container>
    )
}