import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 30px;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
  margin-top: 30px;
  text-transform: uppercase;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCapitalize: 'words',
  autoCorrect: false,
})`
  border-width: 1px;
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

export const CancelButton = styled.TouchableOpacity`
  height: 42px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
`;
