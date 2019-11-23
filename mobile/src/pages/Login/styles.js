import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 0 38px;
  margin-top: 30px;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const Input = styled.TextInput.attrs({
  autoCorrect: false,
  placeholderTextColor: '#999',
})`
  border-width: 1;
  border-color: #ddd;
  padding: 0 20px;
  font-size: 16px;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 2px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 42px;
  background-color: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
