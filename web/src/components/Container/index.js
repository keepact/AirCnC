import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px auto;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;

  p {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }
`;
