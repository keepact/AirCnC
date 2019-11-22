import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
  height: 32px;
  resize-mode: contain;
  align-self: center;
  margin-top: 10px;
`;

export const HomeButton = styled(RectButton)`
`;
