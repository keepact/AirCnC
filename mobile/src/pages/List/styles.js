import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Search = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #eee;
  padding: 20px 10px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SearchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #f05a5b;
  color: #fff;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;
