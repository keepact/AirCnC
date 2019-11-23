import styled from 'styled-components';

export const SpotList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;

  li {
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      height: 120px;
      background-size: cover;
      border-radius: 4px;
    }

    strong {
      margin-top: 10px;
      font-size: 24px;
      color: #444;
    }

    span {
      font-size: 15px;
      color: #999;
    }
  }
`;

export const Notifications = styled.ul`
  list-style: none;
  margin-bottom: 15px;

  li {
    font-size: 16px;
    line-height: 24px;

    button {
      margin-right: 10px;
      border: 0;
      font-weight: bold;
      margin-top: 10px;
      cursor: pointer;

      &[accept] {
        color: #84C870;
      }

      &[reject='reject'] {
        color: #E55E5E;
      }
    }
  }
`;
